import { Router } from 'express';
import rechargeCardController from '../../controllers/rechargeCardController';
import authMiddleware from '../../middlewares/authMiddleware';
import verifyActiveCardMiddleware from '../../middlewares/verifyActiveCardMiddleware';
import verifyExpiredCardMiddleware from '../../middlewares/verifyExpiredCardMiddleware';

const rechargesRouter = Router();

rechargesRouter.post('/recharge-card', authMiddleware, verifyActiveCardMiddleware, verifyExpiredCardMiddleware, rechargeCardController);
export default rechargesRouter;