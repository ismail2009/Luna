import {initialAuthState} from './reducer';
// clear
export const clearAuthStore = () => ({...initialAuthState});

// handle login and registration
export const startAuthUser = state => ({...state, loading: true});
export const authUserSuccess = (state, {data}) => ({
  ...state,
  user: data,
  isAuth: true,
  loading: false,
});
export const authUserRejected = (state, {data}) => ({
  ...state,
  authError: data,
  isAuth: false,
  loading: false,
});

// handle login and registration
export const startFetchUserDetail = state => ({...state, loading: true});
export const fetchUserDetailSuccess = (state, {data}) => ({
  ...state,
  userDetail: data,
  loading: false,
});
export const fetchUserDetailRejected = (state, {data}) => ({
  ...state,
  authError: data,
  loading: false,
});

// social login
export const startSocialAuthUser = state => ({...state, loading: true});
