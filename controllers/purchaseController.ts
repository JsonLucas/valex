import { Request, Response } from "express";
import { paymentRepository } from "../repositories";

const purchaseController = async (req: Request, res: Response) => {
    const { data } = res.locals;
    const { card, purchaseValue, businessId } = data;
    try{
        await paymentRepository.insertPayment({cardId: card.id, businessId, amount: purchaseValue});
        res.status(201).send('transaction completed.');
    }catch(e: any){
        console.log(e.message);
        res.sendStatus(500);
    }
}

export default purchaseController;