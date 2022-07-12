import { Router } from "express";
import activateCardController from "../../controllers/activateCardController";
import cardBalanceController from "../../controllers/cardBalanceController";
import createCardController from "../../controllers/createCardController";
import authCardMiddleware from "../../middlewares/authCardMiddleware";
import authEmployeeMiddleware from "../../middlewares/authEmployeeMiddleware";
import authCompanyMiddleware from "../../middlewares/authCompanyMiddleware";
import calculateCardBalanceMiddleware from "../../middlewares/calculateCardBalanceMiddleware";
import verifyActiveCardMiddleware from "../../middlewares/verifyActiveCardMiddleware";
import verifyBlockedCardMiddleware from "../../middlewares/verifyBlockedCardMiddleware";
import verifyExpiredCardMiddleware from "../../middlewares/verifyExpiredCardMiddleware";
import lockCardController from "../../controllers/lockCardController";
import unlockCardController from "../../controllers/unlockCardController";

const cardRouter = Router();

cardRouter.post('/create-card', authCompanyMiddleware, authCardMiddleware, createCardController);

cardRouter.put('/card-activation', authEmployeeMiddleware, verifyBlockedCardMiddleware, 
verifyExpiredCardMiddleware, activateCardController); 

cardRouter.put('/unlock-card', authEmployeeMiddleware, verifyBlockedCardMiddleware, 
verifyExpiredCardMiddleware, unlockCardController); 

cardRouter.put('/lock-card', authEmployeeMiddleware, verifyActiveCardMiddleware, 
verifyExpiredCardMiddleware, lockCardController);

cardRouter.get('/transactions', authEmployeeMiddleware, calculateCardBalanceMiddleware, cardBalanceController);
//trocar esse auth middleware

export default cardRouter;