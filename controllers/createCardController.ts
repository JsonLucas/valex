import { faker } from '@faker-js/faker';
import { Request, Response } from "express";
import formatEmployeeCardName from "../utils/formatEmployeeCardName";
import cryptr from 'cryptr';
import dayjs from 'dayjs';
import { cardRepository } from '../repositories';

const createCardController = async (req: Request, res: Response) => {
    try{
        const { data } = res.locals;
        const { employeeId, cardPassword, cardType } = data;
        const cardNumber = faker.finance.creditCardNumber('#### #### #### ###L');  //adicionar utils pra essas fucionalidades aqui
        const securityCode = faker.finance.creditCardCVV();
        const encrypt = new cryptr(cardPassword);
        const encryptedPassword = encrypt.encrypt(cardPassword);
        const expirationDate = dayjs(Date.now()).add(5, 'year').format('MM-YY');
        const formatedName = formatEmployeeCardName(data.name);
        const insertCardData = { 
            employeeId, 
            expirationDate, 
            securityCode,
            cardholderName: formatedName, 
            password: encryptedPassword,
            number: cardNumber,
            isVirtual: true,
            isBlocked: true,
            originalCardId: null,
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