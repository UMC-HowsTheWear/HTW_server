import express from "express";
import asyncHandler from 'express-async-handler';

import {  } from "../controllers/around.controller.js";
import {  } from "../controllers/around.controller.js";
import {  } from "../controllers/around.controller.js";

export const aroundRouter = express.Router();

//둘러보기
aroundRouter.get('/', asyncHandler());

//이번주 코디 더보기
aroundRouter.get('/week', asyncHandler());
//이번주 코디 상세보기
aroundRouter.get('/week/:id', asyncHandler());
//이번주 코디 상품 플랫폼 이동
aroundRouter.get('/week/:id/site', asyncHandler());

//다음주 코디 더보기
aroundRouter.get('/next_week', asyncHandler());
//다음주 코디 상세보기
aroundRouter.get('/next_week/:id', asyncHandler());
//다음주 코디 상품 플랫폼 이동
aroundRouter.get('/next_week/:id/site', asyncHandler());

//작년 코디 더보기
aroundRouter.get('/last_year', asyncHandler());
//작년 코디 상세보기
aroundRouter.get('/last_year/:id', asyncHandler());
//작년 코디 상품 플랫폼 이동
aroundRouter.get('/last_year/:id/site', asyncHandler());

//다른사람들 더보기
aroundRouter.get('/people',asyncHandler());

//다른사람들 상세보기
aroundRouter.get('/other',asyncHandler());