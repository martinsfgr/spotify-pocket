import { combineReducers } from 'redux';

import authReducer from './auth';
import contentReducer from './content';
import userReducer from './user';

const reducers = combineReducers({
  auth: authReducer,
  content: contentReducer,
  user: userReducer,
})

export default reducers;
