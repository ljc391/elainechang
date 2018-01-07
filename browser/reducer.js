import { combineReducers } from 'redux';

function homePageReducer (state = {}, action) {
  switch (action.type) {
    case 'TMP': return action.tmp;
    default: return state;
  }
}


const rootReducer = combineReducers({
  homePage: homePageReducer

});

export default rootReducer;