import express from "express";
import asyncHandler from 'express-async-handler';

import { userLogin } from "../controllers/user.controller.js";
import { userJoin } from "../controllers/user.controller.js";
import { userHome } from "../controllers/user.controller.js";

export const userRouter = express.Router();

//로그인
userRouter.post('/login', asyncHandler(userLogin));

//회원가입
userRouter.post('/join', asyncHandler(userJoin));

//홈 화면
userRouter.get('/home', asyncHandler(userHome));

//다른사람들
userRouter.get('/people',asyncHandler());

//다른사람들 상세보기
userRouter.get('/other',asyncHandler());

//나의 패션은, 마이페이지
userRouter.post('/:id/mysnap',asyncHandler());
userRouter.get('/:id/mypage',asyncHandler());
userRouter.patch('/:id/mypage/:id',asyncHandler());
userRouter.delete('/:id/other/:id',asyncHandler());
