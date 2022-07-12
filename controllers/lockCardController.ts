import { Request, Response } from "express";
import { cardRepository } from "../repositories";

const lockCardController = async (req: Request, res: Response) => { //alterar
    try{
        const { data } = res.locals;
        await cardRepository.lockCard(data.card.id);
        res.sendStatus(200);
    }catch(e: any){
        console.log(e.message);
        res.sendStatus(500);
    }
}

export default lockCardController;