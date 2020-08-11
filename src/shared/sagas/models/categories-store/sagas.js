import {takeLatest, put, call} from 'redux-saga/effects';

import {
  GET_CATEGORIES_PENDING,
  GET_CATEGORIES_SUCCESS,
  GET_CATEGORIES_REJECTED,
  GET_CATEGORY_CONTENT_PENDING,
  GET_CATEGORY_CONTENT_SUCCESS,
  GET_CATEGORY_CONTENT_REJECTED,
} from './actionTypes';
import {getWithAuth} from '../../../Api/Api';

const handler = function*() {
  yield takeLatest(GET_CATEGORIES_PENDING, getCategoriesApi);
  yield takeLatest(GET_CATEGORY_CONTENT_PENDING, getCategoryContentApi);
};

function* getCategoriesApi({payload}) {
  const {response, statusCode} = yield call(getWithAuth, {
    api: '/categories',
    payload,
  });
  const {status, result, message} = yield response;
  if (status === 'success' && result) {
    console.log(result, 'result');
    yield put({type: GET_CATEGORIES_SUCCESS, data: result});
  } else {
    yield put({
      type: GET_CATEGORIES_REJECTED,
      data: {msg: message, statusCode},
    });
  }
}
function* getCategoryContentApi({payload}) {
  console.log('start');
  const {response, statusCode} = yield call(getWithAuth, {
    api: `/content/${payload}`,
  });
  console.log(yield response, 'Dfdsfdsfsdfsdfdsf');
  const {status, data, message} = yield response;
  if (status === 'success' && data) {
    console.log(data, 'result');
    yield put({type: GET_CATEGORY_CONTENT_SUCCESS, data});
  } else {
    yield put({
      type: GET_CATEGORY_CONTENT_REJECTED,
      data: {msg: message, statusCode},
    });
  }
}
export {handler};
