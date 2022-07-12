import { NextFunction, Request, Response } from "express";
import { cardRepository } from "../repositories";

const verifyActiveCardMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const { data } = res.locals;
    const { cardType, employeeId } = data;
    try {
        const { rowCount, rows } = await cardRepository.findByTypeAndEmployeeId(cardType, employeeId);
        if (rowCount > 0) {
            if (!rows[0].isBlocked) {
                res.locals.data = { ...data, card: rows[0] };
                next();
                return;
            }
            res.status(400).send('this card is blocked.');
            return;
        }
        res.sendStatus(404);
    } catch (e: any) {
        console.log(e.message);
        res.sendStatus(500);
    }
}

export default verifyActiveCardMiddleware;