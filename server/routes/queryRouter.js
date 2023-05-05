import express from "express";
import { getResultsAPI } from "../controllers/query.controller.js";

const authRouter = express.Router();

authRouter.post("/get", getResultsAPI);

export default authRouter;
