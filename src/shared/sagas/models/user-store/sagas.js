import {takeLatest, put, call} from 'redux-saga/effects';

import {
  AUTH_USER_PENDING_LOGIN,
  AUTH_USER_PENDING_REGISTER,
  AUTH_USER_REJECTED,
  AUTH_USER_SUCCESS,
  REQUEST_USER_DETAIL_PENDING,
  REQUEST_USER_DETAIL_SUCCESS,
  REQUEST_USER_DETAIL_REJECTED,
  AUTH_USER_PENDING_LOGIN_SOCIAL,
  LOGOUT,
  AUTH_USER_CLEAR,
} from './actionTypes';

import {post, getWithAuth, socialAuth} from '../../../Api/Api';
import storage from '../../../utils/storage';

/**
 *
 * @returns {Generator<SimpleEffect<"FORK", ForkEffectDescriptor<never>>, void, *>}
 */
const handler = function*() {
  yield takeLatest(AUTH_USER_PENDING_REGISTER, authApi);
  yield takeLatest(AUTH_USER_PENDING_LOGIN, authLoginApi);
  yield takeLatest(REQUEST_USER_DETAIL_PENDING, getUserDetailApi);
  yield takeLatest(AUTH_USER_PENDING_LOGIN_SOCIAL, socialLoginApi);
  yield takeLatest(LOGOUT, logoutUser);
};

/**
 *
 * @param result
 * @param status
 * @param error
 * @param statusCode
 * @returns {Generator<SimpleEffect<"PUT", PutEffectDescriptor<{data: ({token}|*), type: string}>>|SimpleEffect<"PUT", PutEffectDescriptor<{data: {msg: *, statusCode: *}, type: string}>>|Promise<void>, void, *>}
 */
function* handleAuth({result, status, error, statusCode}) {
  // && result.user
  if (status === 'success' && result.token) {
    yield storage.setItem('@user/token', 'Bearer ' + result.token);
    // yield storage.setItem('@user/user', result.user);
    yield put({type: AUTH_USER_SUCCESS, data: result});
  } else {
    yield put({
      type: AUTH_USER_REJECTED,
      data: {msg: error, statusCode},
    });
  }
}

/**
 * authApi
 * @param payload
 * @returns {Generator<SimpleEffect<"CALL", CallEffectDescriptor<SagaReturnType<function({payload?: *, api: *}): Promise<{response: Promise<any>, statusCode: number}>>>>|Generator<Promise<void>|SimpleEffect<"PUT", PutEffectDescriptor<{data: *, type: string}>>|SimpleEffect<"PUT", PutEffectDescriptor<{data: {msg: *, statusCode: *}, type: string}>>, void, *>|*, void, *>}
 */
function* authApi({payload}) {
  const {response, statusCode} = yield call(post, {
    api: '/register',
    payload,
  });
  const {status, result, error} = yield response;
  console.log(error, 'error');
  console.log(status, 'status');
  console.log(result, 'result');
  yield handleAuth({result, status, error, statusCode});
}

/**
 * getUserDetailApi
 * @param payload
 * @returns {Generator<SimpleEffect<"PUT", PutEffectDescriptor<{data: *, type: string}>>|SimpleEffect<"PUT", PutEffectDescriptor<{data: {msg: *, statusCode: *}, type: string}>>|Promise<void>|SimpleEffect<"CALL", CallEffectDescriptor<SagaReturnType<function({payload?: *, api: *}): {response: Promise<any>, statusCode: number}>>>|*, void, *>}
 */
function* getUserDetailApi({payload}) {
  const {response, statusCode} = yield call(getWithAuth, {
    api: '/user_detail',
    payload,
  });
  const {status, result, error} = yield response;
  console.log(error, 'error');
  console.log(status, 'status');
  console.log(result, 'result');
  console.log(statusCode, 'statusCode');
  if (status === 'success' && result) {
    yield storage.setItem('@user/user', result);
    yield put({type: REQUEST_USER_DETAIL_SUCCESS, data: result});
  } else {
    yield put({
      type: REQUEST_USER_DETAIL_REJECTED,
      data: {msg: error, statusCode},
    });
  }
}

/**
 * authLoginApi
 * @param payload
 * @returns {Generator<SimpleEffect<"CALL", CallEffectDescriptor<SagaReturnType<function({payload?: *, api: *}): Promise<{response: Promise<any>, statusCode: number}>>>>|Generator<Promise<void>|SimpleEffect<"PUT", PutEffectDescriptor<{data: *, type: string}>>|SimpleEffect<"PUT", PutEffectDescriptor<{data: {msg: *, statusCode: *}, type: string}>>, void, *>|*, void, *>}
 */
function* authLoginApi({payload}) {
  const {response, statusCode} = yield call(post, {
    api: '/login',
    payload,
  });
  const {status, result, error} = yield response;
  console.log(error, 'error');
  console.log(status, 'status');
  console.log(result, 'result');
  console.log(statusCode, 'statusCode');
  yield handleAuth({result, status, error, statusCode});
}

/**
 * socialLoginApi
 * @param payload
 * @returns {Generator<SimpleEffect<"PUT", PutEffectDescriptor<{data: {expiration: *, tokenType: *, accessToken: *}, type: string}>>|SimpleEffect<"CALL", CallEffectDescriptor<SagaReturnType<function({payload?: *, api: *}): Promise<{response: Promise<any>, statusCode: number}>>>>|SimpleEffect<"PUT", PutEffectDescriptor<{data: {msg: *, message: *, statusCode: *}, type: string}>>|Promise<void>|*, void, *>}
 */
function* socialLoginApi({payload}) {
  console.log('socialLoginApi start');
  const {response, statusCode} = yield call(socialAuth, {
    api: '/oauth/token',
    payload,
  });
  const {
    token_type,
    expires_in,
    access_token,
    error,
    message,
    error_description,
  } = yield response;
  if (access_token && token_type) {
    const data = {
      tokenType: token_type,
      expiration: expires_in,
      token: access_token,
    };
    yield storage.setItem('@user/token', data.tokenType + ' ' + data.token);
    yield put({
      type: AUTH_USER_SUCCESS,
      data,
    });
  } else {
    yield put({
      type: AUTH_USER_REJECTED,
      data: {msg: error, statusCode, message},
    });
  }
}

/**
 * logoutUser
 * @returns {Generator<Promise<void>|SimpleEffect<"PUT", PutEffectDescriptor<{type: string}>>, void, *>}
 */
function* logoutUser() {
  yield storage.clear();
  yield put({type: AUTH_USER_CLEAR});
}
export {handler};
