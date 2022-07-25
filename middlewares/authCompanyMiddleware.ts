import { NextFunction, Request, Response } from "express";
import { companyRepository, employeeRepository } from "../repositories";

const authCompanyMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const { apikey } = req.headers; // zadKLNx.DzvOVjQH01TumGl2urPjPQSxUbf67vs0
    const { body } = req;
    if (!apikey) throw { code: 401, error: 'you must have an api key.' };

    const company = await companyRepository.findByApiKey(apikey.toString());
    if (!company) throw { code: 404, error: 'company not found.' };

    const employee = await employeeRepository.verifyEmployee(body.email, company.id);
    if (!employee) throw { code: 404, error: 'employee not found.' };
    
    res.locals.data = {
        ...body,
        name: employee.name,
        employeeId: employee.id
    };
    next();
    return;
}

export default authCompanyMiddleware;