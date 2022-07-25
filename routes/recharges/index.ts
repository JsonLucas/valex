import { Router } from 'express';
import rechargeCardController from '../../controllers/rechargeCardController';
import authCompanyMiddleware from '../../middlewares/authCompanyMiddleware';
import verifyActiveCardMiddleware from '../../middlewares/verifyActiveCardMiddleware';
import verifyExpiredCardMiddleware from '../../middlewares/verifyExpiredCardMiddleware';

const rechargesRouter = Router();

rechargesRouter.post('/recharge-card', authCompanyMiddleware, verifyActiveCardMiddleware, 
verifyExpiredCardMiddleware, rechargeCardController);

export default rechargesRouter;