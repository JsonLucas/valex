import { Request, Response } from "express";
import { paymentRepository } from "../repositories";

const cardBalanceController = async (req: Request, res: Response) => {
    const { data } = res.locals;
    const { card } = data;
    try {
        const { rows } = await paymentRepository.findByCardId(card.id);
        console.log(rows[0]);
        res.sendStatus(200);
    } catch (e: any) {
        console.log(e.message);
        res.sendStatus(500);
    }
}

export default cardBalanceController;