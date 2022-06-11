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
