import { Request, Response } from "express";
import { paymentRepository, rechargeRepository } from "../repositories";

const cardBalanceController = async (req: Request, res: Response) => {
    const { data } = res.locals;
    const { card, balance } = data;
    try {
        const payment = await paymentRepository.findByCardId(card.id);
        const recharges = await rechargeRepository.findRechargeByCardId(card.id);
        res.status(200).send({balance, transactions: [...payment.rows], recharges: [...recharges.rows] });
    } catch (e: any) {
        console.log(e.message);
        res.sendStatus(500);
    }
}

export default cardBalanceController;