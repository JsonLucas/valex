import { NextFunction, Request, Response } from "express";
import { validateSignIn, validateSignUp } from "../utils/validationFunctions";

export const signUpMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const { body } = req;
    const { status, error } = validateSignUp(body);
    if(!status) throw { code: 422, error };

    res.locals.data = body;
    next();
}

export const signInMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const { body } = req;
    const { status, error } = validateSignIn(body);
    if(!status) throw { code: 422, error };

    res.locals.data = body;
    next();
}