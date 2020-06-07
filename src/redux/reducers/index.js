import { combineReducers } from 'redux';

import authReducer from './auth';
import contentReducer from './content';

const reducers = combineReducers({
  auth: authReducer,
  content: contentReducer,
})

export default reducers;
