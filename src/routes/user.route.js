import express from "express";
import asyncHandler from 'express-async-handler';

import { userLogin } from "../controllers/controller.js";
import { userJoin } from "../controllers/controller.js";
import { userHome } from "../controllers/controller.js";

export const userRouter = express.Router();

userRouter.post('/login', asyncHandler(userLogin));
userRouter.post('/join', asyncHandler(userJoin));
userRouter.post('/home', asyncHandler(userHome));