/*
  Bootstrap redux
*/
import { createStore, applyMiddleware, compose } from 'redux'
import createHistory from 'history/createBrowserHistory'
import rootReducer from './reducers';
import initialState from './config/initial-state';
import middleware,{history} from './config/middleware';
import enhancers from './config/enhancer';
import { setLanguages,addTranslation } from 'react-localize-redux';
import homeLang from '../lang/home.json'
import teamlang from '../lang/team.json'
import faqLang from '../lang/faq.json';
import termsLang from '../lang/terms.json'
export {
    history
}


/*
  Combine enhancers and middlewares
*/
const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
)

/*
  Create Store
*/
const store = createStore(
  rootReducer,
  initialState,
  composedEnhancers
)
const getLanguage = ()=>{
    return (navigator.language || navigator.userLanguage).substr(0,2);
}
const languages = ['en', 'pt'];
store.dispatch(addTranslation(homeLang));
store.dispatch(addTranslation(teamlang));
store.dispatch(addTranslation(faqLang));
store.dispatch(addTranslation(termsLang));
store.dispatch(setLanguages(languages,getLanguage()));
export default store
