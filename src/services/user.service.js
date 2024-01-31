import { BaseError } from "../../config/error.js";
import { status } from "../../config/response.status.js";
// dto와 dao에서 가져오기
import { signinResponseDTO, loginResponseDTO } from "./../dtos/user.dto.js"
import { addUser, getUser, confirmUser } from "../models/user.dao.js";

// 회원가입 처리, 추가된 사용자의 정보를 가져와 클라이언트에 반환하는 로직
export const joinUser = async (body) => { 
    //try{
        const joinUserData = await addUser({ 
            'email': body.email,
            'pwd': body.pwd,
            'age': body.age,
            'gender': body.gender,
            'name': body.name, 
            'feel_heat': body.feel_heat,
            'feel_cold': body.feel_cold
        });
    
        console.log("joinUserData : " + joinUserData); 
    
        // -1을 반환하는 대신, 사용자가 이미 존재하는 경우 null을 반환하도록 변경
        if (joinUserData == -1) { 
            console.log("이미 존재하는 아이디입니다.");
            return new BaseError(status.ID_ALREADY_EXIST);
        }else{
            // 사용자가 정상적으로 추가된 경우 해당 사용자의 정보를 반환
            console.log("회원가입 성공");
            return signinResponseDTO(await getUser(joinUserData));
        }
    // }catch (err) {
    //     throw new BaseError(status.PARAMETER_IS_WRONG);
    // }
}

// 로그인을 처리, 로그인 결과에 따라 성공 또는 실패를 나타내는 값을 반환
 export const loginUser = async (body) => {
    //try{
        const loginUserData = await confirmUser({ //confirmUser 함수를 호출해 사용자의 로그인 확인
            'email': body.email,  // body 객체의 login_id와 pwd에 값을 전달
            'pwd' : body.pwd
        });
    
        console.log("loginUserData: ", loginUserData); // 반환확인
    
        if (loginUserData == -1) { // 아이디가 존재하지 않는 경우
            console.log("아이디가 존재하지 않습니다.");
            return new BaseError(status.MEMBER_NOT_FOUND); //-1 반환
        } else if((loginUserData == -2)){ //비번이 틀린경우
            console.log("비밀번호가 틀렸습니다.");
            return new BaseError(status.PASSWORD_IS_WRONG); // -2 반환
        } else { //성공했다면
            console.log("로그인에 성공했습니다.");
            return loginResponseDTO(await getUser(loginUserData)); // getUser 함수 호출해 정보 가져와 DTO  함수로 반환..  그 정보는 로그인 성공에 대한 응답으로 클라이언트에 전달 
        }
    // }catch (err) {
    //     throw new BaseError(status.PARAMETER_IS_WRONG);
    // }
 }

// 홈 화면 조회 //??
// export const getHome = async (params) => {
//     console.log(params); // 전달된 파라미터의 값
//     const user_id  = params.userId; 
//     const tag  = params.lawTag;
//     return await getHomefromTag(tag);
// }