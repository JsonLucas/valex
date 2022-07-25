import { Request, Response } from "express";
import { cardRepository } from "../repositories";

const unlockCardController = async (req: Request, res: Response) => {
    const { data } = res.locals;
    await cardRepository.unlockCard(Number(data.card.id));
    res.sendStatus(200);
}

export default unlockCardController;