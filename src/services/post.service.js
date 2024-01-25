import { BaseError } from "../../config/error.js";
import { status } from "../../config/response.status.js";
import {  } from "../dtos/post.dto.js"

export const getpostData = async (body) => {
    const prefer = body.prefer;

    const joinUserData = await addUser({
        'email': body.email,
        'name': body.name,
        'gender': body.gender,
        'birthYear': body.birthYear,
        'birthMonth': body.birthMonth,
        'birthDay': body.birthDay,
        'addr': body.addr,
        'specAddr': body.specAddr,
        'phone': body.phone
    });

    if(joinUserData == -1){
        throw new BaseError(status.EMAIL_ALREADY_EXIST);
    }else{
        for (let i = 0; i < prefer.length; i++) {
            await setPrefer(joinUserData, prefer[i]);
        }
        return signinResponseDTO(await getUser(joinUserData), await getUserPreferToUserID(joinUserData));
    }
}

export const postpostData = async (body) => {

}

export const patchpostData = async (body) => {

}

export const deletepostData = async (body) => {

}

export const getpageData = async (body) => {

}

export const patchpageData = async (body) => {

}