import {connect} from 'react-redux';
import MediaList from './index';
import * as categoriesActions from '../../sagas/models/categories-store/actionTypes';
export const mapDispatchToProps = dispatch => ({
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
)(MediaList);
