// uset.controller.js
import { status } from '../../config/response.status.js';
import { response } from '../../config/response.js';
import { StatusCodes } from "http-status-codes";
//services에서 함수 가져오기
import { joinUser, loginUser } from './../services/user.service.js';


//회원가입 garam 작성
export const userJoin = async (req, res, next) => {
    console.log("회원가입을 요청하였습니다!");
    console.log("body:", req.body); // 값이 잘 들어오나 찍어보기 위한 테스트용

    res.send(response(status.SUCCESS, await joinUser(req.body)));
}

//로그인 garam 작성
export const userLogin = async (req, res, next) => {
    console.log("로그인을 요청하였습니다!");
    console.log("login:", req.body); // 어떻게 받았는지

    res.send(response(status.SUCCESS, await loginUser(req.body)));
}

// 홈화면 작성- 날씨정보를 프엔에서 받아와서 추천 아이템 뜨게하기 

function provideItems(weatherInfo) {
    let recommendedItems = [];

    const temperature = weatherInfo.temperature; // 받은 온도
    const rainProbability = weatherInfo.rainProbability; // 받은 강수량

    // 강수 확률이 70% 이상일 때 우산 추가
    if (rainProbability >= 70) {
        recommendedItems.push('우산');
    }

    // 온도에 따른 추천 아이템 설정
    // 강수확률이 70% 이상일때 우산 
    // 21 이상일때 반팔, 반바지
    // 16- 20  상의, 바지 
    // 11- 15  아우터, 상의, 바지
    // 6 - 10  아우터, 니트, 바지
    // 1 - 5 패딩, 니트,  바지
    // 0 이하는 패딩, 바지, 목도리

    if (temperature >= 21) {
        recommendedItems.push('반팔', '반바지');

    } else if (temperature >= 16 && temperature <= 20) {
        recommendedItems.push('상의', '바지');

    } else if (temperature >= 11 && temperature <= 15) {
        recommendedItems.push('아우터', '상의', '바지');

    } else if (temperature >= 6 && temperature <= 10) {
        recommendedItems.push('아우터', '니트', '바지');

    } else if (temperature >= 1 && temperature <= 5) {
        recommendedItems.push('패딩', '니트', '바지');

    } else if (temperature <= 0) {
        recommendedItems.push('패딩', '바지', '목도리');
    }

    return recommendedItems;
}

// 홈 화면
async function userHome(req, res, next) {
    try {
        // 프론트엔드로부터 받은 날씨 정보를 가져옴
        const weatherInfo = req.body.weatherInfo;

        // 날씨 정보를 기반으로 추천 아이템을 제공
        const recommendedItems = provideItems(weatherInfo);

        // 클라이언트에게 추천 아이템을 응답으로 전송
        res.status(StatusCodes.OK).json(response(status.SUCCESS, { recommendedItems }));

    } catch (error) {

        next(error);

    }
}

export { userHome };


// 프엔에서 이렇게 바디에 넣으면 
// {
//     "weatherInfo": {
//         "temperature": 17,
//         "rainProbability": 7
//     }
// }

// 이렇게 응답함
// {
//     "isSuccess": true,
//     "code": 2000,
//     "message": "success!",
//     "result": {
//         "recommendedItems": [
//             "상의",
//             "바지"
//         ]
//     }
// }

// 만약 강수량이 70% 넘는다면
// {
//     "weatherInfo": {
//         "temperature": 10,
//         "rainProbability": 70
//     }
// }

// 아래와 같이 우산이 추가로 뜸
// {
//     "isSuccess": true,
//     "code": 2000,
//     "message": "success!",
//     "result": {
//         "recommendedItems": [
//             "우산",
//             "아우터",
//             "니트",
//             "바지"
//         ]
//     }
// }

// 회원가입
// export const userJoin = async (req, res, next) => {
//     const signIn = req.body;
//     console.log("회원가입을 요청하였습니다!");
//     console.log("body:", signIn);

//     try {
//         const signIndata = await joinUser(req.body);
        
//         if (signIndata === -1) { // 중복된 아이디가 있을 때
//             console.log("이미 존재하는 아이디입니다.");
//             return res.send(response(status.ID_ALREADY_EXIST, await joinUser(req.body)));
//         } else { // 회원가입 성공
//             console.log("회원 가입 성공");
//             return res.send(response(status.SUCCESS, await joinUser(req.body)));
//         }
//     } catch (error) {
//         console.log("회원가입 실패");
//         return res.send(response(status.INTERNAL_SERVER_ERROR, await joinUser(req.body)));
//     }
// }

// 로그인
// export const userLogin = async (req, res, next) => {
//     console.log("로그인을 요청하였습니다!");
//     const loginUserData = await loginUser(req.body); // loginUser 함수 호출후 loginUserData에 담음

//     console.log("login:", loginUserData); // 어떻게 받았는지

//     if (loginUserData == -1) { // 반환값이 -1이라면 //틀리면 메세지를 전달, 맞으면 데이터를 전달
//         console.log("존재하지 않는 유저입니다");
//         return res.status(StatusCodes.BAD_REQUEST).json({ message: "존재하지 않는 유저입니다" }); // 400코드 
//     } 
//     else if((loginUserData == -2)){ //반환값이 -2라면
//         console.log("비밀번호가 틀렸습니다.");
//         return res.status(StatusCodes.BAD_REQUEST).json({ message: "비밀번호가 틀렸습니다." }); //400 코드
//     } 
//     else { 
//         console.log("로그인에 성공하였습니다.");
//         return res.status(StatusCodes.OK).send(loginUserData); //200 상태코드
//     }
// }