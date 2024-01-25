import { BaseError } from "../../config/error.js";
import { status } from "../../config/response.status.js";
// dto와 dao에서 가져오기
import { signinResponseDTO, loginResponseDTO } from "./../dtos/user.dto.js"
import { addUser, getUser, confirmUser } from "../models/user.dao.js";

// 회원가입 처리, 추가된 사용자의 정보를 가져와 클라이언트에 반환하는 로직
export const joinUser = async (body) => { 
    //비동기적 작업 수행
    const joinUserData = await addUser({ // adduser 함수를 호출해 새로운 사용자를 데이터 베이스에 추가
        'login_id': body.login_id,
        'pwd': body.pwd,
        'nick': body.nick, 
        'feel_heat': body.feel_heat,
        'feel_cold': body.feel_cold,
        "style" : body.style
    });

    console.log("joinUserData : " + joinUserData); // 콘솔에 추가해 어케 사용자 추가가 이루어졌는지 확인

    if(joinUserData == -1){ // 받은 데이터가 -1이라면 실패
        throw new BaseError(status.ID_ALREADY_EXIST); // ()안의 해당하는 에러를 던지고 함수의 실행을 중단, 아이디가 이미 존재
    }
    // 성공한 경우
    return signinResponseDTO(await getUser(joinUserData)); // getUser함수를 이용해 새로 추가된 사용자의 정보를 가져오고 그 정보를 signinResponseDTO함수를 통해 가공해 반환, 반환한 정보는 회원가입 성공에 대한 응답으로 클라이언트에 전달
}

// 로그인을 처리, 로그인 결과에 따라 성공 또는 실패를 나타내는 값을 반환
 export const loginUser = async (body) => {
    const loginUserData = await confirmUser({ //confirmUser 함수를 호출해 사용자의 로그인 확인
        'login_id': body.login_id,  // body 객체의 login_id와 pwd에 값을 전달
        'pwd' : body.pwd
    });

    console.log("loginUserData: " ,loginUserData); // 반환확인

    if (loginUserData == -1) { // 아이디가 존재하지 않는 경우
        return loginUserData; //-1 반환
    } else if((loginUserData == -2)){ //비번이 틀린경우
        return loginUserData; // -2 반환
    } else { //성공했다면
        return loginResponseDTO(await getUser(loginUserData)); // getUser 함수 호출해 정보 가져와 DTO  함수로 반환..  그 정보는 로그인 성공에 대한 응답으로 클라이언트에 전달 
    }
 }

// 홈 화면 조회 //??
// export const getHome = async (params) => {
//     console.log(params); // 전달된 파라미터의 값
//     const user_id  = params.userId; 
//     const tag  = params.lawTag;
//     return await getHomefromTag(tag);
// }