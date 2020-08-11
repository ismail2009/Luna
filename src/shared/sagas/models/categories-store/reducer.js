import {createReducer} from 'redux-create-reducer';
import * as types from './actionTypes';
import * as actions from './actions';

export const initialCategoriesState = {
  categories: [],
  categoryContent: [],
  error: null,
  loading: false,
};

const actionHandlers = {
  [types.GET_CATEGORIES_PENDING]: actions.getCategoriesStart,
  [types.GET_CATEGORIES_SUCCESS]: actions.getCategoriesSuccess,
  [types.GET_CATEGORIES_REJECTED]: actions.getCategoriesRejected,
  [types.GET_CATEGORY_CONTENT_PENDING]: actions.getCategoryContentStart,
  [types.GET_CATEGORY_CONTENT_SUCCESS]: actions.getCategoryContentSuccess,
  [types.GET_CATEGORY_CONTENT_REJECTED]: actions.getCategoryContentRejected,
  /** ====================================================================== **/
  [types.CATEGORIES_CLEAR]: actions.clearCategoryStore,
};

export default createReducer(initialCategoriesState, actionHandlers);
