import {connect} from 'react-redux';
import * as userActions from '../../shared/sagas/models/user-store/actionTypes';
import SignUpScreen from './index';
export const mapDispatchToProps = dispatch => ({
  register: payload =>
    dispatch({
      type: userActions.AUTH_USER_PENDING_REGISTER,
      payload,
    }),
  loginSocial: payload =>
    dispatch({
      type: userActions.AUTH_USER_PENDING_LOGIN_SOCIAL,
      payload,
    }),
  clearAuthStore: () =>
    dispatch({
      type: userActions.AUTH_USER_CLEAR,
    }),
});

export default connect(
  state => ({
    user: {
      ...state.user,
    },
  }),
  mapDispatchToProps,
)(SignUpScreen);
