import {createReducer} from 'redux-create-reducer';
import * as types from './actionTypes';
import * as actions from './actions';

export const initialAuthState = {
  loading: false,
  isAuth: false,
  user: {},
  userDetail: {},
  authError: {},
  hashWasSent: false,
  passWasChange: false,
  signUpLoader: false,
};

const actionHandlers = {
  [types.AUTH_USER_PENDING_LOGIN]: actions.startAuthUser,
  [types.AUTH_USER_PENDING_REGISTER]: actions.startAuthUser,
  [types.AUTH_USER_PENDING_LOGIN_SOCIAL]: actions.startSocialAuthUser,
  [types.AUTH_USER_SUCCESS]: actions.authUserSuccess,
  [types.AUTH_USER_REJECTED]: actions.authUserRejected,
  [types.REQUEST_USER_DETAIL_PENDING]: actions.startFetchUserDetail,
  [types.REQUEST_USER_DETAIL_SUCCESS]: actions.fetchUserDetailSuccess,
  [types.REQUEST_USER_DETAIL_REJECTED]: actions.fetchUserDetailRejected,
  [types.AUTH_USER_CLEAR]: actions.clearAuthStore,
};

export default createReducer(initialAuthState, actionHandlers);
