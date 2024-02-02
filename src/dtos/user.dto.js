// 회원가입 dto
export const signinResponseDTO = (user) => {
    console.log("signinResponseDTO clear");
    return {"email": user[0].email, "name": user[0].name, "pwd": user[0].pwd};
}

// 로그인 dto
export const loginResponseDTO = (user) => {
    console.log("loginResponseDTO clear");
    console.log(user[0].id);
    return {"user_id": user[0].email, "name": user[0].name, "pwd": user[0].pwd};
}