import { Request, Response } from "express";
import { rechargeRepository } from "../repositories";

const rechargeCardController = async (req: Request, res: Response) => {
    const { data } = res.locals;
    const { card, rechargeValue } = data;
    if (rechargeValue === 0) throw { code: 400, error: 'only values non-null or positive values are accepted.' };
    await rechargeRepository.insertRecharge({ cardId: Number(card.id), amount: Number(rechargeValue) });
    res.status(201).send('rechage completed.');
    return;
}

export default rechargeCardController;