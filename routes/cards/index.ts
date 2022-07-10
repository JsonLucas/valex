import { Router } from "express";
import activateCardController from "../../controllers/activateCardController";
import blockCardController from "../../controllers/blockCardController";
import createCardController from "../../controllers/createCardController";
import authCardMiddleware from "../../middlewares/authCardMiddleware";
import authMiddleware from "../../middlewares/authMiddleware";
import verifyCardMiddleware from "../../middlewares/verifyCardMiddleware";

const cardRouter = Router();

cardRouter.post('/create-card', authMiddleware, authCardMiddleware, createCardController);
cardRouter.put('/card-activation', authMiddleware, verifyCardMiddleware, activateCardController);
cardRouter.put('/lock-card', authMiddleware, verifyCardMiddleware, blockCardController);
cardRouter.put('/unlock-card', authMiddleware, verifyCardMiddleware, blockCardController);

export default cardRouter;