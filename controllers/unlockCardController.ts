import { Request, Response } from "express";
import { cardRepository } from "../repositories";

const unlockCardController = async (req: Request, res: Response) => {
    try{
        const { data } = res.locals;
        await cardRepository.unlockCard(data.card.id);
        res.sendStatus(200);
    }catch(e: any){
        console.log(e.message);
        res.sendStatus(500);
    }
}

export default unlockCardController;