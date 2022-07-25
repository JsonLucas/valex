import { NextFunction, Request, Response } from "express";
import { decryptCardPassword } from "../utils/encryptUtils";

const verifyCardPasswordMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const { data } = res.locals;
    const { card } = data;
    //resolver erro da decrypt pass
    const decryptedPassword = decryptCardPassword(card.password);
    if (decryptedPassword !== card.password) throw { code: 400, error: 'invalid credentials.' };
    next();
}

export default verifyCardPasswordMiddleware;