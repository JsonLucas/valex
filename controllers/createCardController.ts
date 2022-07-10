import formatEmployeeCardName from "../utils/formatEmployeeCardName";
import dayjs from 'dayjs';
import { cardRepository } from '../repositories';
import { Request, Response } from "express";
import { encryptCardSecurityCode } from "../utils/encryptUtils";
import { generateCardNumber, generateCardSecurityCode } from "../utils/fakerUtils";

const createCardController = async (req: Request, res: Response) => {
    try{
        const { data } = res.locals;
        const { employeeId, cardType, name } = data;
        const cardNumber = generateCardNumber();
        const securityCode = encryptCardSecurityCode(generateCardSecurityCode());
        const expirationDate = dayjs(Date.now()).add(5, 'year').format('MM-YY');
        const formatedName = formatEmployeeCardName(name);
        const insertCardData = { 
            employeeId, 
            expirationDate, 
            securityCode,
            cardholderName: formatedName, 
            number: cardNumber,
            isVirtual: true,
            isBlocked: true,
            type: cardType
        };
        await cardRepository.insertCard(insertCardData);
        res.sendStatus(201); 
    }catch(e: any){
        console.log(e.message);
        res.sendStatus(500);
    }
}

export default createCardController;