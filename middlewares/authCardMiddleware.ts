import { NextFunction, Request, Response } from "express";
import { validateCardType } from "../utils/validationFunctions";

const authCardMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const { data } = res.locals;
    const validation = validateCardType(data.cardType, Number(data.cardPassword));
    validation.status ? next() : res.status(400).send(validation.message);
}

export default authCardMiddleware;