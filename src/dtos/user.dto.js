// 회원가입 dto
export const signinResponseDTO = (user) => {
    console.log("signinResponseDTO clear");
    return {"loginId": user[0].login_id, "name": user[0].pwd, "nick": user[0].nick};
}

// 로그인 dto
export const loginResponseDTO = (user) => {
    console.log("loginResponseDTO clear");
    console.log(user[0].id);
    return {"user_id": user[0].id, "name": user[0].pwd, "nick": user[0].nick};
}