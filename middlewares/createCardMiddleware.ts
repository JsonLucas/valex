import { NextFunction, Request, Response } from "express";

const createCardMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const { apiKey } = req.headers;
}

export default createCardMiddleware;