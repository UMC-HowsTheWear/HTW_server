import express from "express";
import asyncHandler from 'express-async-handler';

import {  } from "../controllers/around.controller.js";
import {  } from "../controllers/around.controller.js";
import {  } from "../controllers/around.controller.js";

export const aroundRouter = express.Router();

//둘러보기
aroundRouter.get('/', asyncHandler());

//이번주 코디
aroundRouter.get('/week', asyncHandler());
aroundRouter.get('/week/:id', asyncHandler());
aroundRouter.get('/week/:id/site', asyncHandler());

//다음주 코디
aroundRouter.get('/next_week', asyncHandler());
aroundRouter.get('/next_week/:id', asyncHandler());
aroundRouter.get('/next_week/:id/site', asyncHandler());

//작년 코디
aroundRouter.get('/last_year', asyncHandler());
aroundRouter.get('/last_year/:id', asyncHandler());
aroundRouter.get('/last_year/:id/site', asyncHandler());

//다른사람들
userRouter.get('/people',asyncHandler());

//다른사람들 상세보기
userRouter.get('/other',asyncHandler());