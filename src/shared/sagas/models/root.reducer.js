import {combineReducers} from 'redux';

import authReducer, {initialAuthState} from './user-store/reducer';
import categoriesReducer, {
  initialCategoriesState,
} from './categories-store/reducer';

export const initialState = {
  auth: initialAuthState,
};
const rootReducer = combineReducers({
  user: authReducer,
  categories: categoriesReducer,
});

export {rootReducer};
