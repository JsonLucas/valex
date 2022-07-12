import { Request, Response } from "express";
import { cardRepository } from "../repositories";
import { encryptCardPassword } from "../utils/encryptUtils";

const activateCardController = async (req: Request, res: Response) => {
    try{
        const { data } = res.locals;
        const { card, password } = data;
        await cardRepository.activateCard(card.id, encryptCardPassword(password));
        res.sendStatus(200);
    }catch(e: any){
        console.log(e.message);
        res.sendStatus(500);
    }
}

export default activateCardController;