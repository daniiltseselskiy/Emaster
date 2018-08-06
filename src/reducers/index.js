import { combineReducers } from 'redux'
import homepage from './homepage';
import features from './features';
import about from './about'
import partners from './partners'
import help from './help'
import forums from './forums'
import contact from './contact'
import careers from './careers'
import download from './download'

const RootReducer = combineReducers({
    homepage,
    features,
    about,
    partners,
    help,
    forums,
    contact,
    careers,
    download,
});

export default RootReducer;