import { Router } from "express";
import activateCardController from "../../controllers/activateCardController";
import createCardController from "../../controllers/createCardController";
import authCardMiddleware from "../../middlewares/authCardMiddleware";
import authMiddleware from "../../middlewares/authMiddleware";
import verifyCardMiddleware from "../../middlewares/verifyCardMiddleware";

const cardRouter = Router();

cardRouter.post('/create-card', authMiddleware, authCardMiddleware, createCardController);
cardRouter.put('/card-activation', authMiddleware, verifyCardMiddleware, activateCardController);

export default cardRouter;