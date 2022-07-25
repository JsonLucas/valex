import { Router } from "express";
import cardRouter from "./cards";
import purchaseRouter from "./purchases";
import rechargesRouter from "./recharges";
import users from "./users";

const routes = Router();
routes.use(cardRouter);
routes.use(rechargesRouter);
routes.use(purchaseRouter);
routes.use(users);

export default routes;