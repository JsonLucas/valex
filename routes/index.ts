import { Router } from "express";
import cardRouter from "./cards";
import purchaseRouter from "./purchases";
import rechargesRouter from "./recharges";

const routes = Router();
routes.use(cardRouter);
routes.use(rechargesRouter);
routes.use(purchaseRouter);

export default routes;