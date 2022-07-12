import { Router } from 'express';
import purchaseController from '../../controllers/purchaseController';
import authEmployeeMiddleware from '../../middlewares/authEmployeeMiddleware';
import calculateCardBalanceMiddleware from '../../middlewares/calculateCardBalanceMiddleware';
import verifyActiveCardMiddleware from '../../middlewares/verifyActiveCardMiddleware';
import verifyBusinessMiddleware from '../../middlewares/verifyBusinessMiddleware';
import verifyExpiredCardMiddleware from '../../middlewares/verifyExpiredCardMiddleware';

const purchaseRouter = Router();

purchaseRouter.post('/purchases', authEmployeeMiddleware, verifyActiveCardMiddleware, 
verifyExpiredCardMiddleware, verifyBusinessMiddleware, 
calculateCardBalanceMiddleware, purchaseController);
export default purchaseRouter;