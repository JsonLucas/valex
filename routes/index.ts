import { Router } from "express";
import cardRouter from "./cards";

const routes = Router();
routes.use(cardRouter);

export default routes;