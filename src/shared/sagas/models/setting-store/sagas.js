import {takeLatest, put, call} from 'redux-saga/effects';

import {SETTING_SOUND_CHANGE, SETTING_VOICE_CHANGE} from './actionTypes';

import storage from '../../../utils/storage';
import {REQUEST_USER_DETAIL_SUCCESS} from '../user-store/actionTypes';

const handler = function*() {
  yield takeLatest(SETTING_SOUND_CHANGE, setValue);
  yield takeLatest(SETTING_VOICE_CHANGE, setValue);
};

function* setValue({payload}) {
  yield put({type: SETTING_SOUND_CHANGE, data: result});
}

export {handler};
