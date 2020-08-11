import {fork} from 'redux-saga/effects';

import {handler as userSaga} from './models/user-store/sagas';
import {handler as categoriesSaga} from './models/categories-store/sagas';

export default function* rootSaga() {
  yield fork(userSaga);
  yield fork(categoriesSaga);
  // yield fork(pranksSaga);
}
