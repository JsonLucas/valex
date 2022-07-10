import { Router } from "express";
import createCardController from "../../controllers/createCardController";
import authCardMiddleware from "../../middlewares/authCardMiddleware";
import authMiddleware from "../../middlewares/authMiddleware";

const cardRouter = Router();

cardRouter.post('/create-card', authMiddleware, authCardMiddleware, createCardController);

export default cardRouter;