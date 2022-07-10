import { NextFunction, Request, Response } from "express";
import { companyRepository, employeeRepository } from "../repositories";
import { verifyEmployee } from "../repositories/employeeRepository";

const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const { apikey } = req.headers; // zadKLNx.DzvOVjQH01TumGl2urPjPQSxUbf67vs0
    const { body } = req;
    try{
        if(apikey){
            const company = await companyRepository.findByApiKey(apikey.toString());
            if(company.rowCount > 0){
                const employee = await verifyEmployee(body.email, company.rows[0].id);
                if(employee.rowCount > 0){
                    res.locals.company = company.rows[0];
                    res.locals.data = {
                        ...body, 
                        name: employee.rows[0].fullName, 
                        employeeId: employee.rows[0].id
                    };
                    next();
                    return;
                }
            }
        }
        res.sendStatus(401);
    }catch(e: any){
        console.log(e.message);
        res.sendStatus(500);
    }
}

export default authMiddleware;