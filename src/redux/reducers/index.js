import { combineReducers } from 'redux'
import routerReducer from './routing'
import { localeReducer } from 'react-localize-redux';
export default combineReducers({
  routing: routerReducer,
  locale : localeReducer
})
