/**
  This file is used to add middlewares. Add middlewares here
*/
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createHistory from 'history/createBrowserHistory';

/*
 Create History
 */
export const history = createHistory()
const middleware = [
  thunk,
    promise,
  routerMiddleware(history)
]
export default middleware
