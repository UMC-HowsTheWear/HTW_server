const express = require('express');
const router = express.Router();

// 나의 패션은
router.dkgkget('/:id/mysnap', (req, res) => {
  console.log(`내 스냅 페이지 - 사용자 ID: ${req.params.id}`);
});

// 마이페이지 
router.get('/:id/mypage', (req, res) => {
  console.log(`마이페이지 - 사용자 ID: ${req.params.id}`);
});

// 마이페이지 수정하기
router.patch('/:id/mypage/:id', (req, res) => {
    console.log(`마이페이지 - 사용자 ID: ${req.params.id}`);
  });


// 게시물 삭제
router.delete('/:id/post', (req, res) => {
  console.log(`포스트 페이지 - 사용자 ID: ${req.params.id}`);
});

module.exports = router;

//고치기전
// import express from "express";
// import asyncHandler from 'express-async-handler';

// import { postMysnap } from "../controllers/user.controller.js";
// import { userJoin } from "../controllers/user.controller.js";
// import { userHome } from "../controllers/user.controller.js";

// export const userRouter = express.Router();

// //나의 패션은
// userRouter.post('/:id/mysnap',asyncHandler());

// //마이페이지
// userRouter.get('/:id/mypage',asyncHandler());

// //마이페이지 수정하기
// userRouter.patch('/:id/mypage/:id',asyncHandler());

// //게시물 삭제
// userRouter.delete('/:id/post/',asyncHandler());