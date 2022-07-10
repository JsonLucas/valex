import { NextFunction, Request, Response } from "express";
import { cardRepository } from "../repositories";

const verifyCardMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const { data } = res.locals; //card cvv 862 -> teste
    const { cardType, employeeId, password } = data;
    try{
        const { rowCount, rows } = await cardRepository.findByTypeAndEmployeeId(cardType, employeeId);
        if(rowCount > 0){
            if(rows[0].isBlocked){
                res.locals.cardData = { card: rows[0], password };
                next();
                return;
            }
            res.status(400).send('this card is already active');
            return;
        }
        res.sendStatus(404);
    }catch(e: any){
        console.log(e.message);
        res.sendStatus(500);
    }
}

export default verifyCardMiddleware;