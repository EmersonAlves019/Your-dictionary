import yourDictionary from '../api/yourDictionary';
import { EHttpCode, EHttpMethod, IApiResult } from '../http/@types';
import request from '../http/request';
import { IUser } from './@types';

export const getUser = async (email: string): Promise<IApiResult> => {
  return await request(yourDictionary, `/users?email=${email}`);
};

export const userRegister = async (body: IUser): Promise<IApiResult> => {
  const userAlreadyExists = await getUser(body.email);
  if (userAlreadyExists?.data?.length) {
    return {
      success: false,
      code: EHttpCode.BadRequest,
      description: 'User already exists',
      header: null,
      data: null,
    };
  }

  return await request(
    yourDictionary,
    '/users',
    EHttpCode.Created,
    EHttpMethod.POST,
    { ...body },
  );
};
export const getWordList = async (
  page: number | string,
  limit: number | string,
) => {
  const p = page ? `_page=${page}` : '';
  const l = limit ? `_limit=${limit}` : '';
  return await request(yourDictionary, `/words${p && l ? `?${p}&${l}` : ''}`);
};

export const getWordHistory = async (userId: string) => {
  return await request(
    yourDictionary,
    `/wordHistory?userId=${userId}`,
    EHttpCode.OK,
    EHttpMethod.GET,
  );
};

export const saveWord = async (
  word: string,
  isFavorite: boolean,
  userId: string,
): Promise<void> => {
  if (userId) {
    await request(
      yourDictionary,
      '/wordHistory',
      EHttpCode.Created,
      EHttpMethod.POST,
      { word, isFavorite, userId },
    );
  }
};
