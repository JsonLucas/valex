import { Request, Response } from "express";
import { generateApiKey } from "../utils/fakerUtils";

export const signUpController = async (req: Request, res: Response) => {
    const { data } = res.locals;
    const { accountType } = data;
    if(accountType === 'Company'){
        const { name, login, password } = data;
        const apiKey = generateApiKey();
        //criar conta de compania aki
    }
}

export const signInController = async (req: Request, res: Response) => {
    const { data } = res.locals;
}