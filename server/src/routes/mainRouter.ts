import { Router } from "express";
import getCharById from "../controllers/getCharById";

const mainRouter = Router();

mainRouter.get("/character/:id", getCharById);


export default mainRouter;