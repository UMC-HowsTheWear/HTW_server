import { BaseError } from "../../config/error.js";
import { status } from "../../config/response.status.js";
import { getPostResponseDTO, postPostResponseDTO } from "../dtos/post.dto.js"
import { patchPostResponseDTO, deletePostResponseDTO } from "../dtos/post.dto.js"
import { getPageResponseDTO, patchPageResponseDTO } from "../dtos/post.dto.js"
import { addArticle, getArticle } from "../models/post.dao.js";

export const getPost = async (body) => {
    const getPostData = await getArticle({
        'post_id': body.id,
        'user_id': body.user_id,
        'name': body.name,
        'temperature': body.temperature,
        'item': body.item,
        'location': body.location
    });

    if(getPostData == -1){
        throw new BaseError(status.POST_ALREADY_EXIST);
    }

    return getPostResponseDTO(await getUser(joinUserData));
}

export const postPost = async (body) => {
    const postPostData = await addArticle({
        'post_id': body.id,
        'user_id': body.user_id,
        'name': body.name,
        'temperature': body.temperature,
        'item': body.item,
        'location': body.location
    });

    if(postPostData == -1){
        throw new BaseError(status.POST_ALREADY_EXIST);
    }

    return postPostResponseDTO(await getArticle(joinUserData), await getUserPreferToUserID(joinUserData));
}

export const patchPost = async (body) => {
    const patchPostData = await addUser({
        'post_id': body.id,
        'user_id': body.user_id,
        'name': body.name,
        'temperature': body.temperature,
        'item': body.item,
        'location': body.location
    });

    if(patchPostData == -1){
        throw new BaseError(status.EMAIL_ALREADY_EXIST);
    }

    return patchPostResponseDTO(await getUser(joinUserData), await getUserPreferToUserID(joinUserData));
}

export const deletePost = async (body) => {
    const deletePostData = await addUser({
        'post_id': body.id,
        'user_id': body.user_id,
        'name': body.name,
        'temperature': body.temperature,
        'item': body.item,
        'location': body.location
    });

    if(deletePostData == -1){
        throw new BaseError(status.EMAIL_ALREADY_EXIST);
    }

    return deletePostResponseDTO(await getUser(joinUserData), await getUserPreferToUserID(joinUserData));
}

export const getPage = async (body) => {
    const getPageData = await addUser({
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

    if(getPageData == -1){
        throw new BaseError(status.EMAIL_ALREADY_EXIST);
    }

    return getPageResponseDTO(await getUser(joinUserData), await getUserPreferToUserID(joinUserData));
}

export const patchPage = async (body) => {
    const patchPageData = await addUser({
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

    if(patchPageData == -1){
        throw new BaseError(status.EMAIL_ALREADY_EXIST);
    }

    return patchPageResponseDTO(await getUser(joinUserData), await getUserPreferToUserID(joinUserData));
}