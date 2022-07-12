import dayjs from "dayjs";
import { Request, Response, NextFunction } from "express";


const verifyExpiredCardMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const { data } = res.locals;
    const { card } = data;
    try {
        if(card){
            const now = dayjs(Date.now()).format('MM-YY'); 
            if(dayjs(now).isBefore(dayjs(card.expirationDate))){
                next();
                return;
            }
            res.status(401).send('this card is expirated.');
            return;
        }
        res.sendStatus(404);
    }
    catch(e: any){
        console.log(e.message);
        res.sendStatus(500);
    }
}

export default verifyExpiredCardMiddleware;