import {connect} from 'react-redux';
import HomeScreen from './index';
import * as userActions from '../../shared/sagas/models/user-store/actionTypes';
import * as categoriesActions from '../../shared/sagas/models/categories-store/actionTypes';
export const mapDispatchToProps = dispatch => ({
  getCategories: () =>
    dispatch({
      type: categoriesActions.GET_CATEGORIES_PENDING,
    }),
  login: payload =>
    dispatch({
      type: userActions.AUTH_USER_PENDING_LOGIN,
      payload,
    }),
  getUserDetail: () =>
    dispatch({
      type: userActions.REQUEST_USER_DETAIL_PENDING,
    }),
  logout: () =>
    dispatch({
      type: userActions.LOGOUT,
    }),
  clearAuthStore: () =>
    dispatch({
      type: userActions.AUTH_USER_CLEAR,
    }),
  clearCategoryStore: () =>
    dispatch({
      type: categoriesActions.CATEGORIES_CLEAR,
    }),
});

export default connect(
  state => ({
    user: {
      ...state.user,
    },
    ...state.categories,
  }),
  mapDispatchToProps,
)(HomeScreen);
