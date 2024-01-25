"use strict"; // "use strict" 오타 수정

const express = require('express');
const mysql = require('mysql');
const path = require('path');
const serveStatic = require('serve-static'); // serve-static 오타 수정
const PORT = 3000;
const router = express.Router();

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


const userRouter = require('./src/routes/user.route');
const aroundRouter = require('./src/routes/around.route');
const postRouter = require('./src/routes/post.route');

app.use(userRouter);
app.use(aroundRouter);
app.use(postRouter);

app.listen(PORT, () => {
    console.log("서버 가동");
});
