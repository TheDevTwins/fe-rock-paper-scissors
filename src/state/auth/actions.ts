import { ApiStateSingle, StateManager } from 'redux-state-manager';
import Cookies from 'js-cookie';
import jwtDecode from 'jwt-decode';
import * as types from './types';

import { API_URL } from 'settings';

type State = ApiStateSingle<types.Auth>;

const apiUrl = `${API_URL}/auth`;

const token = Cookies.get('token');
let decodedToken: any = {};
try {
  if (token) decodedToken = jwtDecode(token);
} catch (e) {}

export const authManager = new StateManager({
  apiUrl,
  moduleName: 'auth',
  initialState: {
    item: {
      token,
      userId: decodedToken['user_id'],
      username: decodedToken['username'],
      userType: decodedToken['user_type'],
      email: decodedToken['email'],
    },
    waiting: false,
  },
});

const loginReducer = (state: State, result: { token: string }) => {
  const { token } = result;
  let decodedToken: any;
  try {
    decodedToken = jwtDecode(token) as any;
    state.item = {
      token: result.token,
      userId: decodedToken['user_id'],
      username: decodedToken['username'],
      userType: decodedToken['user_type'],
      email: decodedToken['email'],
    };
    Cookies.set('token', result.token);
  } catch (e) {}
};

export const login = authManager.createApi<
  { username: string; password: string },
  { token: string },
  State
>('LOGIN', {
  path: '/get_token',
  method: 'POST',
  successReducer: loginReducer,
});

export const refreshToken = authManager.createApi<
  { token: string },
  { token: string },
  State
>('REFRESH_TOKEN', {
  path: '/refresh_token',
  method: 'POST',
  successReducer: loginReducer,
  failReducer: state => {
    state.item.token = undefined;
    state.error = undefined;
    Cookies.remove('token');
  },
});

export const logout = authManager.createLocalEvent('LOGOUT', state => {
  state.item.token = undefined;
  Cookies.remove('token');
});
