import dayjs from "dayjs";
import { Request, Response } from "express";
import { cardRepository } from "../repositories";

const blockCardController = async (req: Request, res: Response) => {
    try{
        const { cardData } = res.locals;
        const { path } = req;
        const now = dayjs(Date.now()).format('MM-YY'); 
        if(dayjs(now).isBefore(dayjs(cardData.expirationDate))){
            if(path === '/unlock-card'){
                if(cardData.isBlocked){
                    await cardRepository.unlockCard(cardData.id);
                    res.sendStatus(200);
                    return;
                }
                res.status(400).send('this card is already unlocked.');
                return;
            }else{
                if(!cardData.isBlocked){
                    await cardRepository.lockCard(cardData.id);
                    res.sendStatus(200);
                    return;
                }
                res.status(400).send('this card is already locked.');
                return;
            }
        }
        res.status(400).send('this card is expirated');
    }catch(e: any){
        console.log(e.message);
        res.sendStatus(500);
    }
}

export default blockCardController;