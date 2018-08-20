import _ from 'lodash'
import {
    CHANGE_LANGUAGE,
} from '../../constants/actionTypes';

import labels from '../../constants/labels'
import content from '../../constants/content'

const initialState = {
   labels: labels,
   content: content,
   base: localStorage.getItem('base') || "/en",
};

const reducer = (state = initialState, action) => {
    let newState = _.cloneDeep(state);
    
    switch(action.type) {
        
        case CHANGE_LANGUAGE:
            newState.base = action.locale
            localStorage.setItem('base', newState.base)
            return newState
        default:
            return state;
    }
};

export default reducer;