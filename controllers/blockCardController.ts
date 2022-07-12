import { Request, Response } from "express";

const blockCardController = async (req: Request, res: Response) => { //alterar
    try{
        const { data } = res.locals;
        console.log(data);
        res.sendStatus(200);
    }catch(e: any){
        console.log(e.message);
        res.sendStatus(500);
    }
}

export default blockCardController;