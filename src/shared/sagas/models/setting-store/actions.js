import {initialAuthState} from './reducer';
// handle login and registration
export const handleSoundChange = (state, {data}) => ({
  ...state,
  isSoundEnable: data,
});
export const handleVoiceChange = (state, {data}) => ({
  ...state,
  isVoiceEnable: data,
});
//
