import { NextFunction, Request, Response } from "express";
import { businessRepository } from "../repositories";

const verifyBusinessMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const { data } = res.locals;
    const { businessId, cardType } = data;
    const businesses = await businessRepository.findBusinessById(businessId);
    if (!businesses) throw { code: 404, error: 'business not found.' };
    
    if (businesses.type !== cardType) throw { code: 400, error: `"${cardType}" card type are not allowed to this operation` };
    next();
}

export default verifyBusinessMiddleware;