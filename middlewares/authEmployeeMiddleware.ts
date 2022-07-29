import { NextFunction, Request, Response } from "express";
import { employeeRepository } from "../repositories";

const authEmployeeMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const { authorization } = req.headers;
    const { body } = req;
    const { email, id } = body;
    if(email){
        const employee = await employeeRepository.findByEmail(email);
        if (!employee) throw { code: 404, error: 'employee not found' }
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
}

export default authEmployeeMiddleware;