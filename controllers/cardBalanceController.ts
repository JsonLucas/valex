import { Request, Response } from "express";
import { paymentRepository, rechargeRepository } from "../repositories";

const cardBalanceController = async (req: Request, res: Response) => {
    const { data } = res.locals;
    const { card, balance } = data;
    const payment = await paymentRepository.findByCardId(Number(card.id));
    const recharges = await rechargeRepository.findRechargeByCardId(Number(card.id));
    res.status(200).send({ balance, transactions: payment, recharges: recharges });
}

export default cardBalanceController;