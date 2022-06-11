import { Dispatch, ReactNode, SetStateAction } from 'react';

export interface IUser {
  email: string;
  password: string;
}

export interface IUserProvider {
  userCredentials: IUser | null;
  setUserCredentials: Dispatch<SetStateAction<IUser | null>>;
  userSession: string;
  setUserSession: Dispatch<SetStateAction<string>>;
  auth: boolean;
}

export interface IHookProvider {
  children: ReactNode;
}
