import { NextFunction, Request, Response } from "express";
import { cardRepository } from "../repositories";
import { validateCardType } from "../utils/validationFunctions";

const authCardMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const { data } = res.locals;
    const { cardType, employeeId } = data;
    const {status, message} = validateCardType(cardType);
    if (!status) throw { code: 422, error: message };

    const card = await cardRepository.findByTypeAndEmployeeId(cardType, employeeId);
    if (card) throw { code: 409, error: `you already have a card of type "${cardType}".` };

    next();
}

export default authCardMiddleware;