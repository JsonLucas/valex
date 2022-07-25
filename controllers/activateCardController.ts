import { Request, Response } from "express";
import { cardRepository } from "../repositories";
import { encryptCardPassword } from "../utils/encryptUtils";

const activateCardController = async (req: Request, res: Response) => {
    const { data } = res.locals;
    const { card, password } = data;
    await cardRepository.activateCard(Number(card.id), encryptCardPassword(password));
    res.sendStatus(200);
}

export default activateCardController;