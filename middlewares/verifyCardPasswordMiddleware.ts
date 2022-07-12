import { NextFunction, Request, Response } from "express";
import { decryptCardPassword } from "../utils/encryptUtils";

const verifyCardPasswordMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const { data } = res.locals;
    const { card } = data;
    //resolver erro da decrypt pass
    try{
        const decryptedPassword = decryptCardPassword(card.password);
        if(decryptedPassword === data.password){
            next();
            return;
        }
        res.status(401).send('invalid credentials');
    }catch(e: any){
        console.log(e);
        res.sendStatus(500);
    }
}

export default verifyCardPasswordMiddleware;