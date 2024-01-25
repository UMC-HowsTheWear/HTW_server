const express = require('express');
const router = express.Router();

// 둘러보기
router.get('/around', (req, res) => {
  console.log('around 페이지');
});

// 이번 주 
router.get('/around/week', (req, res) => {
  console.log('이번 주 페이지');
});

router.get('/around/week/:id', (req, res) => {
  console.log(`이번 주 특정 ID 페이지 - ID: ${req.params.id}`);
});

router.get('/around/week/:id/site', (req, res) => {
  console.log(`이번 주 특정 ID 사이트 페이지 - ID: ${req.params.id}`);
});

// 다음 주 
router.get('/around/next_week', (req, res) => {
  console.log('다음 주 페이지');
});

router.get('/around/next_week/:id', (req, res) => {
  console.log(`다음 주 특정 ID 페이지 - ID: ${req.params.id}`);
});

router.get('/around/next_week/:id/site', (req, res) => {
  console.log(`다음 주 특정 ID 사이트 페이지 - ID: ${req.params.id}`);
});

// 작년 
router.get('/around/last_year', (req, res) => {
  console.log('작년 페이지');
});

router.get('/around/last_year/:id', (req, res) => {
  console.log(`작년 특정 ID 페이지 - ID: ${req.params.id}`);
});

router.get('/around/last_year/:id/site', (req, res) => {
  console.log(`작년 특정 ID 사이트 페이지 - ID: ${req.params.id}`);
});

// 다른사람들
router.get('/around/people', (req, res) => {
  console.log('people 페이지');
});

// 다른사람들 상세보기
router.get('/around/other', (req, res) => {
  console.log('other 페이지');
});

module.exports = router;


// 고치기전
// import express from "express";
// import asyncHandler from 'express-async-handler';

// import {  } from "../controllers/around.controller.js";
// import {  } from "../controllers/around.controller.js";
// import {  } from "../controllers/around.controller.js";

// export const aroundRouter = express.Router();

// //둘러보기
// aroundRouter.get('/', asyncHandler());

// //이번주 코디
// aroundRouter.get('/week', asyncHandler());
// aroundRouter.get('/week/:id', asyncHandler());
// aroundRouter.get('/week/:id/site', asyncHandler());

// //다음주 코디
// aroundRouter.get('/next_week', asyncHandler());
// aroundRouter.get('/next_week/:id', asyncHandler());
// aroundRouter.get('/next_week/:id/site', asyncHandler());

// //작년 코디
// aroundRouter.get('/last_year', asyncHandler());
// aroundRouter.get('/last_year/:id', asyncHandler());
// aroundRouter.get('/last_year/:id/site', asyncHandler());

// //다른사람들
// userRouter.get('/people',asyncHandler());

// //다른사람들 상세보기
// userRouter.get('/other',asyncHandler());