import { NextFunction, Request, Response } from "express";
import { businessRepository } from "../repositories";

const verifyBusinessMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const { data } = res.locals;
    const { businessId, cardType } = data;
    try {
        const { rowCount, rows } = await businessRepository.findBusinessById(businessId);
        if (rowCount > 0) {
            if (rows[0].type === cardType) {
                next();
                return;
            }
            res.status(400).send(`"${cardType}" card type are not allowed to this operation`);
            return;
        }
        res.status(404).send('business not found.');
    } catch (e: any) {
        console.log(e.message);
        res.sendStatus(500);
    }
}

export default verifyBusinessMiddleware;