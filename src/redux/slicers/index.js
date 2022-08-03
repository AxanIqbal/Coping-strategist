import {combineReducers} from '@reduxjs/toolkit';
import userReducer from './userSlicer';
import {backEndApi} from '../apis';
import locationReducer from './location.slicer';

const reducer = combineReducers({
  [backEndApi.reducerPath]: backEndApi.reducer,
  user: userReducer,
  location: locationReducer,
});
export default reducer;
