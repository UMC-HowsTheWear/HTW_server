// models/user.sql.js

// signIn, login
export const insertUserSql = "INSERT INTO user (email, pwd, age, gender, name, feel_heat, feel_cold) VALUES (?, ?, ?, ?, ?, ?, ?)";

// 사용자 아이디를 사용해 해당 사용자의 모든 정보를 조회하는 쿼리
export const getUserID = "SELECT * FROM user WHERE id = ?";

// 로그인 아이디를 사용해 해당 사용자의 아이디 조회 쿼리
export const getUserIDfromLoginId = "SELECT id FROM user WHERE email = ?";

// 주어진 로그인 아이디가 데베에 존재하는지 확인하는하는 쿼리
export const confirmId = "SELECT EXISTS(SELECT 1 FROM user WHERE email = ?) as isExistId";

// 로그인 아이디를 사용해 해당 사용자의 비번 조회하는 쿼리
export const getUserPassword = "SELECT pwd FROM user WHERE email = ?";

//auto_increment reset
export const aireset = "ALTER TABLE user AUTO_INCREMENT = 1";
