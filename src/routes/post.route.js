import express from "express";
import asyncHandler from 'express-async-handler';

import { postMysnap } from "../controllers/user.controller.js";
import { userJoin } from "../controllers/user.controller.js";
import { userHome } from "../controllers/user.controller.js";

export const userRouter = express.Router();

//나의 패션은
userRouter.post('/:id/mysnap',asyncHandler());

//마이페이지
userRouter.get('/:id/mypage',asyncHandler());

//마이페이지 수정하기
userRouter.patch('/:id/mypage/:id',asyncHandler());

//게시물 삭제
userRouter.delete('/:id/post/',asyncHandler());