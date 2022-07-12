import { NextFunction, Request, Response } from "express";
import { paymentRepository, rechargeRepository } from "../repositories";

const calculateCardBalanceMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const { data } = res.locals;
    const { card, purchaseValue } = data;
    try{
        const cardBalance = await rechargeRepository.calculateCardBalance(card.id);
        const amountSpent = await paymentRepository.calculateBalanceSpent(card.id);
        const totalBalance = (cardBalance.sum - amountSpent.sum);
        if(req.path === '/purchases'){
            if(totalBalance >= purchaseValue){
                next();
                return;
            }
            res.status(400).send('insufficient card balance.');
            return;
        }
        res.locals.data = {...data, balance: totalBalance};
        next();
    }catch(e: any){
        console.log(e.message);
        res.sendStatus(500);
    }
}

export default calculateCardBalanceMiddleware;