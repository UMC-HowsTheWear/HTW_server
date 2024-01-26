// uset.controller.js
import { status } from '../../config/response.status.js';
import { response } from '../../config/response.js';
import { StatusCodes } from "http-status-codes";
//services에서 함수 가져오기
import { joinUser, loginUser } from './../services/user.service.js';
// import { getHome } from './../providers/user.provider.js';

// 회원가입
export const userJoin = async (req, res, next) => {
    const signIn = req.body;
    console.log("회원가입을 요청하였습니다!");
    console.log("body:", signIn);

    try {
        const signIndata = await joinUser(req.body);
        
        if (signIndata === null) { // 중복된 아이디가 있을 때
            console.log("아이디가 중복됩니다.");
            return res.status(StatusCodes.BAD_REQUEST).json({
                message: "아이디가 중복됩니다.",
            }); 
        } else { // 회원가입 성공
            console.log("회원 가입 성공");
            return res.status(StatusCodes.OK).json({
                message: "회원가입 성공",
            });
        }
    } catch (error) {
        console.log("회원가입 실패");
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            message: "서버 에러, 관리자에게 문의 바랍니다.",
        });
    }
}

// 로그인
export const userLogin = async (req, res, next) => {
    const logIn = req.body; // body 데이터를 logIn에 담음
    console.log("로그인을 요청하였습니다!");
    const loginUserData = await loginUser(logIn); // loginUser 함수 호출후 loginUserData에 담음

    console.log(loginUserData); // 어떻게 받았는지

    if (loginUserData == -1) { // 반환값이 -1이라면 //틀리면 메세지를 전달, 맞으면 데이터를 전달
        console.log("존재하지 않는 유저입니다");
        return res.status(StatusCodes.BAD_REQUEST).json({ message: "존재하지 않는 유저입니다" }); // 400코드 
    } 
    else if((loginUserData == -2)){ //반환값이 -2라면
        console.log("비밀번호가 틀렸습니다.");
        return res.status(StatusCodes.BAD_REQUEST).json({ message: "비밀번호가 틀렸습니다." }); //400 코드
    } 
    else { 
        console.log("로그인에 성공하였습니다.");
        return res.status(StatusCodes.OK).send(loginUserData); //200 상태코드
    }
}

// 홈 화면 조회
// export const userHome = async (req, res, next) => {
//     console.log("홈");
//     console.log("body:", req.body); // 값이 잘 들어오나 찍어보기 위한 테스트용

//     return res.send(response(status.SUCCESS, await getHome(req.params)));

// }