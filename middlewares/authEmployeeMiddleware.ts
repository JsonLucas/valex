import { NextFunction, Request, Response } from "express";
import { employeeRepository } from "../repositories";

const authEmployeeMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const { email, id } = req.headers;
    const { body } = req;
    try {
        let queryEmail;
        if(body.email){ queryEmail = body.email }
        else if(email){ queryEmail = email }
        const employee = await employeeRepository.findByEmail(queryEmail);
        if (employee) {
            if (Object.keys(body).length !== 0) {
                res.locals.data = {
                    employeeId: employee.id,
                    password: body.password,
                    cardType: body.cardType,
                    businessId: body.businessId,
                    purchaseValue: body.purchaseValue
                };
            } else {
                res.locals.data = { employeeId: employee.id, card: { id } };
            }
            next();
            return;
        }
        res.sendStatus(404);
    } catch (e: any) {
        console.log(e.message);
        res.sendStatus(500);
    }
}

export default authEmployeeMiddleware;