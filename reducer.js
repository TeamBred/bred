import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';


function user(state = {}, action) {
  console.log('userState',state, action);
  return state;
}

function expenses(state=[], action) {
  console.log(state, action);
  return state;
}

const userReducer = combineReducers({user, expenses, routing: routerReducer });

export default userReducer;
