import { Request, Response, NextFunction } from 'express';

interface Error {
    code: number,
    error: string | object,
    message?: string
}

const handleErrors = (e: Error, req: Request, res: Response, next: NextFunction) => {
    if(e.code){
        if(e.error){
            res.status(e.code).send(e.error);
            return;
        }
        res.sendStatus(e.code);
        return;
    }
    console.log(e.message);
    res.sendStatus(500);
}

export default handleErrors;