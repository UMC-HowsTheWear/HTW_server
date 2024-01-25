const express = require('express');
const router = express.Router();

// 로그인 라우터
router.get('/login', (req, res) => {
  res.send('로그인 페이지');
});

// 회원가입 라우터
router.get('/join', (req, res) => {
  res.send('회원가입 페이지');
});

// 홈 라우터
router.get('/home', (req, res) => {
  res.send('홈 페이지');
});

module.exports = router;