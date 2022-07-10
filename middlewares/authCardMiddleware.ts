import { NextFunction, Request, Response } from "express";
import { cardRepository } from "../repositories";
import { validateCardType } from "../utils/validationFunctions";

const authCardMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const { data } = res.locals;
    const { cardType, employeeId } = data; //adicionar condição para não permitir ativação de cartão expirado (data)
    try{
        const validation = validateCardType(cardType);
        if(validation.status){
            const { rowCount } = await cardRepository.findByTypeAndEmployeeId(cardType, employeeId);
            if(rowCount === 0){
                next();
                return;
            }
            res.status(400).send(`you already have a card of type "${cardType}".`);
            return;
        }
        res.status(400).send(validation.message)
    }catch(e: any){
        console.log(e.message);
        res.sendStatus(500);
    }
}

export default authCardMiddleware;