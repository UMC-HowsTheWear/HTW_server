// models/user.dao.js

import { pool } from "../../config/db.config.js"; // db 연결관리
import { BaseError } from "../../config/error.js"; // 사용자 정의 에러
import { status } from "../../config/response.status.js"; // 응답상태 코드
import { confirmId, insertUserSql, getUserID, getUserPassword, getUserIDfromLoginId } from "./../models/user.sql.js"; // sql 쿼리문 정의한 상수

// 회원가입
export const addUser = async (data) => { // 사용자 정보를 받아 데베에 추가
    //try{
        const conn = await pool.getConnection(); // 데베 연결 풀에서 연결을 가져옴
        console.log("data.login_id " + data.login_id); // 확인
        const [confirm] = await pool.query(confirmId, data.login_id); //주어진 로그인 아이디가 존재하는지 확인

        if(confirm[0].isExistId){ // 이미 존재한다면 -1을 반환

            conn.release(); //데베 연결 해제
            return -1;
        }

        const result = await pool.query(insertUserSql, [
            data.login_id,
            data.pwd,
            data.nick,
            data. gender,
            data.feel_heat, // 일단 추가
            data.feel_cold,
            data.style
        ]); // 사용자 정보를 데베에 추가 / 사용자를 전달, 쿼리 결과에서 새로 추가된 사용자의 아이디를 반환

        conn.release(); // 연결 해제
        return result[0].insertId; // 새로 추가된 사용자의 아이디를 반환

        
    //}catch (err) {
    //    throw new BaseError(status.PARAMETER_IS_WRONG);
    //}
}

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

export const confirmUser = async (data) => { // 사용자 확인
    try{
        const conn = await pool.getConnection(); // 데베 연결
        
        const [confirm] = await pool.query(confirmId, data.login_id); //주어진 로그인 id에 해당하는 사용자가 데베에 있는지 확인하는 쿼리 실행
        
        if(confirm[0].isExistId == 0){ // 사용자가 존재치 않으면 -1 반환
            conn.release();
            return -1;
        }
        
        const [pwd] = await pool.query(getUserPassword, data.login_id); // 비번 확인을 위해 주어진 로그인 아이디에 해당하는 비번 조회
        conn.release(); // 데베 해제
        

        if(pwd[0].pwd != data.pwd) // 비번 틀리면 -2
            return -2;
        else { // 일치시 로그인아이디에 해당하는 유저 아이디를 조회하여 반환
            const user_id = await pool.query(getUserIDfromLoginId, data.login_id); 
            return user_id[0][0].id;
        }
        
    }catch (err) { // 에러시 에러 던짐
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}

