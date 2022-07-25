import { Request, Response } from "express";
import { paymentRepository } from "../repositories";

const purchaseController = async (req: Request, res: Response) => {
    const { data } = res.locals;
    const { card, purchaseValue, businessesId } = data;
    await paymentRepository.insertPayment({ cardId: Number(card.id), businessesId, amount: Number(purchaseValue) });
    res.status(201).send('transaction completed.');
}

export default purchaseController;