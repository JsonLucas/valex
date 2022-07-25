import { Request, Response } from "express";
import { cardRepository } from "../repositories";

const lockCardController = async (req: Request, res: Response) => {
    const { data } = res.locals;
    await cardRepository.lockCard(Number(data.card.id));
    res.sendStatus(200);
}

export default lockCardController;