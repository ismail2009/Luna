import {connect} from 'react-redux';
import SongsScreen from './index';
import * as categoriesActions from '../../shared/sagas/models/categories-store/actionTypes';
export const mapDispatchToProps = dispatch => ({
  getCategories: () =>
    dispatch({
      type: categoriesActions.GET_CATEGORIES_PENDING,
    }),
  getCategoryContent: param =>
    dispatch({
      type: categoriesActions.GET_CATEGORY_CONTENT_PENDING,
      payload: param,
    }),
});

export default connect(
  state => ({
    ...state.categories,
  }),
  mapDispatchToProps,
)(SongsScreen);
