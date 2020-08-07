import React, { useState, useMemo, useEffect, useContext, createContext } from 'react';
import jwtDecode from 'jwt-decode';
import axios from 'axios';
import { tokenManager } from '../domain/tokenManager';
import { fetchUserInfo } from '../api';

interface TokenInfo {
  email: string;
  username: string;
  exp: number;
  orig_iat: number;
  user_id: number;
}

// declare module name space
export interface Group {
  access: string[];
  learning_permission: any[];
  alps_class: string[];
  exam: any[];
  feature: any[];
}

export interface Profile {
  id: number;
  cellphone: string;
  date_of_birth: string;
  school?: string;
  department?: string;
  is_lock: boolean;
  is_apply: boolean;
  level_rank: number;
  user_id: number;
  gender?: any;
  cellphone_parent?: any;
  medal: string;
  point: number;
  total_rank: number;
  default_language: number;
}

export interface Product {
  id: number;
  is_purchase: boolean;
  name: string;
  num_of_problem: number;
  slug: string;
}

export interface UserInfo {
  id: number;
  username: string;
  email: string;
  first_name: string;
  last_name: string;
  group: Group;
  accessLevel: number;
  profile: Profile;
  date_joined: Date;
  user_hash: string;
  is_chat_available: boolean;
  is_exam: boolean;
  has_popup: boolean;
  products: Product[];
}

type UserInfoGroup = {
  tokenInfo: Partial<TokenInfo>;
  userInfo: Partial<UserInfo>;
  signModalShown: boolean;
};

type UserInfoContext = UserInfoGroup & {
  login: () => Promise<unknown>;
  logout: () => Promise<unknown>;
  setSignModalShown: (flag: boolean) => void;
};

enum LoginMessage {
  SUCCESS_ALPS_LOGIN = 'SUCCESS_ALPS_LOGIN',
  FAILURE_ALPS_LOGIN = 'FAILURE_ALPS_LOGIN',
}

enum LogoutMessage {
  SUCCESS_ALPS_LOGOUT = 'SUCCESS_ALPS_LOGOUT',
  FAILURE_ALPS_LOGOUT = 'FAILURE_ALPS_LOGOUT',
}

export const UserContext = createContext<UserInfoContext>({
  tokenInfo: {},
  userInfo: {},
  signModalShown: false,
  login: () => Promise.resolve(undefined),
  logout: () => Promise.resolve(undefined),
  setSignModalShown: () => {},
});

let isDoing = false;

export const UserProvider: React.FC = ({ children }) => {
  const getUserInfo = (token: string, userInfo = {} as UserInfo): Omit<UserInfoGroup, 'signModalShown'> => ({
    tokenInfo: token ? jwtDecode(token) : {},
    userInfo,
  });

  const [userInfo, _setUserInfo] = useState(getUserInfo(''));
  const [signModalShown, _setSignModalShown] = useState(false);

  useEffect(() => {
    if (!tokenManager.token) return;
    fetchUserInfo()
      .then(([{ data: userInfo }, { data: product }]) =>
        _setUserInfo(
          getUserInfo(tokenManager.token, {
            ...userInfo,
            products: product.results,
          })
        )
      )
      .catch(() => _setUserInfo(getUserInfo('')));
  }, []);

  const login = () => {
    return new Promise((res) => {
      if (isDoing) return;
      isDoing = true;
      fetchUserInfo()
        .then(([{ data: userInfo }, { data: product }]) =>
          _setUserInfo(
            getUserInfo(tokenManager.token, {
              ...userInfo,
              products: product.results,
            })
          )
        )
        .catch(() => {
          alert('로그인 실패');
        })
        .then(() => {
          isDoing = false;
          res();
        });
    });
  };

  const logout = () => {
    return new Promise((res) => {
      _setUserInfo(getUserInfo(''));
      res();
    });
  };
  const setSignModalShown = (flag: boolean) => {
    _setSignModalShown(flag);
  };

  const userInfoMemo = useMemo(
    () => ({
      ...userInfo,
      signModalShown,
      login,
      logout,
      setSignModalShown,
    }),
    [userInfo.tokenInfo, userInfo.userInfo, signModalShown]
  );

  return <UserContext.Provider value={userInfoMemo}>{children}</UserContext.Provider>;
};
