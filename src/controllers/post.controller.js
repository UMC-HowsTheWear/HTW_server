import { status } from '../../config/response.status.js';
import { response } from '../../config/response.js';
import { getpost, postpost, patchpost, deletepost, getpage, patchpage } from '../services/post.service.js';

export const postMysnap = async (req, res, next) => {
    console.log("내 게시물을 조회합니다.");
    console.log("body:", req.body); // 값이 잘 들어오나 찍어보기 위한 테스트용

    res.send(response(status.SUCCESS, await getpost(req.body)));
}

export const postCre = async (req, res, next) => {
    console.log("내 게시물을 생성합니다.");
    console.log("body:", req.body); // 값이 잘 들어오나 찍어보기 위한 테스트용

    res.send(response(status.SUCCESS, await postpost(req.body)));
}

export const postRepair = async (req, res, next) => {
    console.log("내 게시물을 수정합니다.");
    console.log("body:", req.body); // 값이 잘 들어오나 찍어보기 위한 테스트용

    res.send(response(status.SUCCESS, await patchpost(req.body)));
}

export const postDel = async (req, res, next) => {
    console.log("내 게시물을 삭제합니다.");
    console.log("body:", req.body); // 값이 잘 들어오나 찍어보기 위한 테스트용

    res.send(response(status.SUCCESS, await deletepost(req.body)));
}

export const postMypage = async (req, res, next) => {
    console.log("마이페이지를 조회합니다.");
    console.log("body:", req.body); // 값이 잘 들어오나 찍어보기 위한 테스트용

    res.send(response(status.SUCCESS, await getpage(req.body)));
}

export const postMypageRepair = async (req, res, next) => {
    console.log("마이페이지를 수정합니다.");
    console.log("body:", req.body); // 값이 잘 들어오나 찍어보기 위한 테스트용

    res.send(response(status.SUCCESS, await patchpage(req.body)));
}