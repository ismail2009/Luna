import {connect} from 'react-redux';
import ContentScreen from './index';
import * as categoriesActions from '../../shared/sagas/models/categories-store/actionTypes';
export const mapDispatchToProps = dispatch => ({
  getCategoryContent: param => {
    console.log(param, 'param');
    return dispatch({
      type: categoriesActions.GET_CATEGORY_CONTENT_PENDING,
      payload: param,
    });
  },
});

export default connect(
  state => ({
    ...state.categories,
  }),
  mapDispatchToProps,
)(ContentScreen);
