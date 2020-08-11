import {initialCategoriesState} from './reducer';
// clear
export const clearCategoryStore = (state) => ({...initialCategoriesState});
/** ====================================================================== **/

// handle get  All Luna categories with Sub categories
export const getCategoriesStart = (state) => ({...state, loading: true});
export const getCategoriesSuccess = (state, {data}) => ({
  ...state,
  categories: data,
  loading: false,
});
export const getCategoriesRejected = (state, {data}) => ({
  ...state,
  error: data,
  loading: false,
});
/** ====================================================================== **/

// handle get  Luna category content with Sub categories
export const getCategoryContentStart = (state) => ({...state, loading: true});
export const getCategoryContentSuccess = (state, {data}) => ({
  ...state,
  categoryContent: data,
  loading: false,
});
export const getCategoryContentRejected = (state, {data}) => ({
  ...state,
  error: data,
  loading: false,
});
