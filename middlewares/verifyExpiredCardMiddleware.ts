import dayjs from "dayjs";
import { Request, Response, NextFunction } from "express";


const verifyExpiredCardMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const { data } = res.locals;
    const { card } = data;
    if (!card) throw { code: 404 };

    const now = dayjs(Date.now()).format('MM-YY');
    if (!dayjs(now).isBefore(dayjs(card.expirationDate))) throw { code: 400, error: 'this card is expirated.' };
    
    next();
}

export default verifyExpiredCardMiddleware;