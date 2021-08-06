/*
 * @Author: gaoxue
 * @Date: 2021-07-24 11:13:51
 */
import { Reducer } from 'redux';
import { Effect } from 'dva';
import { setAuthorizationToken } from '@/services/http';
import * as api from '@/services/api';
import { history } from 'umi';


interface AuthModelState {
  wcl: object[];
  yxRegister: {
    accid: string;
    token: string;
  };
}
export interface AuthModelType {
  namespace: string;
  state: AuthModelState;
  effects: {
    login: Effect;
    logout: Effect;
  };
  reducers: {
    saveLoginInfo: Reducer;
    clearLoginInfo: Reducer;
  };
}

export const authState: AuthModelState = {
  wcl: [],
  yxRegister: {
    accid: '',
    token: '',
  },
};

const Model: AuthModelType = {
  namespace: 'auth',
  state: authState,
  effects: {
    * login({ payload }, { call, put }) {
      const data = yield call(api.auth.token, payload);
      window.localStorage.setItem('access_token', data.accessToken);
      setAuthorizationToken(data.accessToken);
      yield put({
        type: 'saveLoginInfo',
        payload: data,
      });
      // history.push('/home');
    },
    * logout(_, { put }) {
      yield put({
        type: 'clearLoginInfo',
      });
      history.push('/login');
      window.location.reload();
    },
  },
  reducers: {
    saveLoginInfo(state, action) {
      console.log(state);
      return {
        wcl: action.payload.wcl,
        yxRegister: action.payload.yxRegister,
      };
    },
    clearLoginInfo() {
      setAuthorizationToken(false);
      window.localStorage.clear();
      ['alone', 'lower', 'upper', 'doCalling'].forEach((item) => {
        window.localStorage.removeItem(item);
      });
      return authState;
    },
  },
};

export default Model;
