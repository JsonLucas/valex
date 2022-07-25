import { NextFunction, Request, Response } from "express";
import { paymentRepository, rechargeRepository } from "../repositories";

const calculateCardBalanceMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const { data } = res.locals;
    const { card, purchaseValue } = data;
    const cardBalance = await rechargeRepository.calculateCardBalance(card.id);
    const amountSpent = await paymentRepository.calculateBalanceSpent(card.id);
    const totalBalance = (cardBalance - amountSpent);
    if (req.path === '/purchases') {
        if (totalBalance < purchaseValue) throw { code: 400, error: 'insufficient card balance' };
        next();
        return;
    }
    res.locals.data = { ...data, balance: totalBalance };
    next();
}

export default calculateCardBalanceMiddleware;