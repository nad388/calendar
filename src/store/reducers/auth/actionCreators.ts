import axios from 'axios';
import { AppDispatch } from '../..';
import { IUser } from '../../../models/IUser';
import {
  AuthActionEnum,
  SetAuthAction,
  SetErrorAction,
  SetIsLoadingAction,
  SetUserAction,
} from './types';

export const AuthActionCreators = {
  setUser: (user: IUser): SetUserAction => ({
    type: AuthActionEnum.SET_USER,
    payload: user,
  }),
  setIsAuth: (auth: boolean): SetAuthAction => ({
    type: AuthActionEnum.SET_AUTH,
    payload: auth,
  }),
  setIsLoading: (isLoading: boolean): SetIsLoadingAction => ({
    type: AuthActionEnum.SET_IS_LOADING,
    payload: isLoading,
  }),
  setError: (error: string): SetErrorAction => ({
    type: AuthActionEnum.SET_ERROR,
    payload: error,
  }),
  login:
    (username: string, password: string) => async (dispatch: AppDispatch) => {
      try {
        dispatch(AuthActionCreators.setIsLoading(true));
        setTimeout(async () => {
          const response = await axios.get<IUser[]>('./users.json');
          const mockUsers = response.data.find(
            (user) => user.username === username && user.password === password
          );
          if (mockUsers) {
            localStorage.setItem('auth', 'true');
            localStorage.setItem('username', mockUsers.username);
            dispatch(AuthActionCreators.setIsAuth(true));
            dispatch(AuthActionCreators.setUser(mockUsers));
          } else {
            dispatch(
              AuthActionCreators.setError(
                'Incorrect login or password has been entered'
              )
            );
          }
          dispatch(AuthActionCreators.setIsLoading(false));
        }, 1000);
      } catch (e) {
        dispatch(AuthActionCreators.setError('An error has occurred'));
      }
    },
  logout: () => async (dispatch: AppDispatch) => {
    localStorage.removeItem('auth');
    localStorage.removeItem('username');
    dispatch(AuthActionCreators.setUser({} as IUser));
    dispatch(AuthActionCreators.setIsAuth(false));
  },
};
