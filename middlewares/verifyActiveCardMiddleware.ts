import { NextFunction, Request, Response } from "express";
import { cardRepository } from "../repositories";

const verifyActiveCardMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const { data } = res.locals;
    const { cardType, employeeId } = data;
    const card = await cardRepository.findByTypeAndEmployeeId(cardType, employeeId);
    if (!card) throw { code: 404 };
    
    if (card.isBlocked) throw { code: 400, error: 'this card is blocked.' };
    res.locals.data = { ...data, card };
    next();
}

export default verifyActiveCardMiddleware;