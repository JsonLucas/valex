import { Request, Response } from "express";
import { rechargeRepository } from "../repositories";

const rechargeCardController = async (req: Request, res: Response) => {
    const { data } = res.locals;
    try{
        const { card, rechargeValue } = data;
        if(rechargeValue > 0){
            await rechargeRepository.insertRecharge({cardId: card.id, amount: Number(rechargeValue)});
            res.status(201).send('rechage completed.');
            return;
        }
        res.status(400).send('only values non-null or positive values are accepted.');
    }catch(e: any){
        console.log(e.message);
        res.sendStatus(500);
    }
    res.sendStatus(200);
}

export default rechargeCardController;