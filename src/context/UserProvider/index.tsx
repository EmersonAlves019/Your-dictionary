import React, {
  createContext,
  useContext,
  useMemo,
  useState,
  useEffect,
} from 'react';

import { getUser } from '../../services/providers/yourDictionaryProvider';
import { IHookProvider, IUser, IUserProvider } from './@types';

export const UserProviderContext = createContext({} as IUserProvider);

const UserProvider: React.FC<IHookProvider> = ({ children }) => {
  const [userCredentials, setUserCredentials] = useState<IUser | null>(null);
  const [userSession, setUserSession] = useState<string>('');

  const [auth, setAuth] = useState<boolean>(false);

  useEffect(() => {
    userCredentials?.email &&
      userCredentials?.password &&
      getUser(userCredentials.email).then(res => {
        const users = res.data;
        const isAuthenticated = userCredentials.password === users[0]?.password;
        setAuth(isAuthenticated);
      });
  }, [userCredentials]);

  useEffect(() => {
    setUserCredentials(null);
  }, []);

  const userProvider = useMemo(() => {
    return {
      userCredentials,
      setUserCredentials,
      userSession,
      setUserSession,
      auth,
    };
  }, [userCredentials, setUserCredentials, userSession, setUserSession, auth]);

  return (
    <UserProviderContext.Provider value={userProvider}>
      {children}
    </UserProviderContext.Provider>
  );
};

export const useUserInfos = (): IUserProvider => {
  return useContext(UserProviderContext);
};

export const useAuth = (): boolean => {
  const { auth, userCredentials } = useUserInfos();
  return userCredentials ? auth : false;
};

export default UserProvider;
