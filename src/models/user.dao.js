// models/user.dao.js

import { pool } from "../../config/db.config.js"; // db 연결관리
import { BaseError } from "../../config/error.js"; // 사용자 정의 에러
import { status } from "../../config/response.status.js"; // 응답상태 코드
import { confirmId, insertUserSql, getUserID, getUserPassword, getUserIDfromLoginId } from "./../models/user.sql.js"; // sql 쿼리문 정의한 상수

// 회원가입
export const addUser = async (data) => {
    try {
        const conn = await pool.getConnection();
        console.log("data.login_id " + data.login_id);
        const [confirm] = await pool.query(confirmId, data.login_id);

        if (confirm[0].isExistId) {
            conn.release();
            return -1;
        }

        const result = await pool.query(insertUserSql, [
            data.login_id,
            data.pwd,
            data.nick,
            data.gender,
            data.feel_heat,
            data.feel_cold,
            data.style
        ]);

        conn.release();
        return result[0].insertId;
    } catch (error) {
        console.error("Error occurred while adding user:", error);
        throw new BaseError(status.INTERNAL_SERVER_ERROR); // 내부 서버 오류 발생 시 에러 처리
    }
}

// 사용자 정보얻기
//userId를 이용해 데베에 사용자 정보를 조회하는 함수
export const getUser = async (userId) => {  // userId로 사용자 정보 조회
    try {
        const conn = await pool.getConnection();
        const [user] = await pool.query(getUserID, userId); //getUserID 쿼리 실행시 주어진 userId에 해당하는 사용자 정보 조회

        console.log(user); // 사용자 정보 콘솔 출력

        if(user.length == 0){ // 조회된 사용자 정보가 없다면 -1 반환
            return -1; 
        }

        conn.release(); // 데베 해제
        return user; // 조회된 사용자 정보 반환
        
    } catch (err) { // 에러 발생시 에러 던지기
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}

// 주어진 로그인 아이디와 비번 사용해 사용자를 확인하는 함수
export const confirmUser = async (data) => {
    try {
        const conn = await pool.getConnection();
        const [confirm] = await pool.query(confirmId, data.login_id);

        if (confirm[0].isExistId == 0) {
            conn.release();
            return -1;
        }

        const [pwd] = await pool.query(getUserPassword, data.login_id);
        conn.release();

        if (pwd[0].pwd !== data.pwd)
            return -2;
        else {
            const user_id = await pool.query(getUserIDfromLoginId, data.login_id);
            return user_id[0][0].id;
        }
    } catch (error) {
        console.error("Error occurred while confirming user:", error);
        throw new BaseError(status.INTERNAL_SERVER_ERROR); // 내부 서버 오류 발생 시 에러 처리
    }
}

