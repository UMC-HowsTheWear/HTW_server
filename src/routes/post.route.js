import express from "express";
import asyncHandler from 'express-async-handler';

import { postMysnap } from "../controllers/post.controller.js";
import { postCre } from "../controllers/post.controller.js";
import { postRepair } from "../controllers/post.controller.js";
import { postDel } from "../controllers/post.controller.js";
import { postMypage } from "../controllers/post.controller.js";
import { postMypageRepair } from "../controllers/post.controller.js";

export const postRouter = express.Router();

//나의 패션은 - 내 게시물 조회
postRouter.get('/mysnap',asyncHandler(postMysnap));

//내 게시물 생성
postRouter.post('/mysnap_create',asyncHandler(postCre));

//내 게시물 수정
postRouter.patch('/mysnap_repair',asyncHandler(postRepair));

//내 게시물 삭제
postRouter.delete('/mysnap_del',asyncHandler(postDel));

//마이페이지
postRouter.get('/mypage',asyncHandler(postMypage));

//마이페이지 수정하기
postRouter.patch('/mypage/:id',asyncHandler(postMypageRepair));
