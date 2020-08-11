import {createReducer} from 'redux-create-reducer';
import * as types from './actionTypes';
import * as actions from './actions';
import storage from '../../../utils/storage';

export const initialAuthState = {
  isSoundEnable: true,
  isVoiceEnable: true,
};

const actionHandlers = {
  [types.SETTING_SOUND_CHANGE]: actions.handleSoundChange,
  [types.SETTING_VOICE_CHANGE]: actions.handleVoiceChange,
};

export default createReducer(initialAuthState, actionHandlers);
