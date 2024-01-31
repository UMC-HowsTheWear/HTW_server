// user.route.js

import express from "express";
import asyncHandler from 'express-async-handler';
import { userLogin } from "../controllers/user.controller.js";
import { userJoin } from "../controllers/user.controller.js";
//import { userHome } from "../controllers/user.controller.js";
// userReadItem
export const userRouter = express.Router({mergeParams: true});

//로그인 하기
userRouter.post('/login', asyncHandler(userLogin));

//회원가입 하기
userRouter.post('/join', asyncHandler(userJoin));

//홈 화면
//userRouter.get('/home', asyncHandler(userHome));
