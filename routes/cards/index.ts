import { Router } from "express";
import activateCardController from "../../controllers/activateCardController";
import blockCardController from "../../controllers/blockCardController";
import cardBalanceController from "../../controllers/cardBalanceController";
import createCardController from "../../controllers/createCardController";
import authCardMiddleware from "../../middlewares/authCardMiddleware";
import authMiddleware from "../../middlewares/authMiddleware";
import calculateCardBalanceMiddleware from "../../middlewares/calculateCardBalanceMiddleware";
import verifyActiveCardMiddleware from "../../middlewares/verifyActiveCardMiddleware";
import verifyBlockedCardMiddleware from "../../middlewares/verifyBlockedCardMiddleware";
import verifyExpiredCardMiddleware from "../../middlewares/verifyExpiredCardMiddleware";

const cardRouter = Router();

cardRouter.post('/create-card', authMiddleware, authCardMiddleware, createCardController);

cardRouter.put('/card-activation', authMiddleware, verifyBlockedCardMiddleware, verifyExpiredCardMiddleware, 
activateCardController); //ativa cartão

cardRouter.put('/unlock-card', authMiddleware, verifyBlockedCardMiddleware, verifyExpiredCardMiddleware, 
blockCardController); //desbloqueia cartão

cardRouter.put('/lock-card', authMiddleware, verifyActiveCardMiddleware, verifyExpiredCardMiddleware, 
blockCardController);

cardRouter.get('/transactions', authMiddleware, calculateCardBalanceMiddleware, cardBalanceController);
//trocar esse auth middleware

export default cardRouter;