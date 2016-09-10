import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';


function user(state = {}, action) {

  console.log('userStateChange',action);
  switch (action.type) {
    case 'SENDDATA_SUCCESS':
      return Object.assign({}, state, user: { username: action.payload.username,
                                              email: action.payload.email,
                                              loading: false,
                                              error: null});

      break;
    case 'CHANGE_USER_INFO':
      return Object.assign({}, state, {
        username: action.username,
        email: action.email
      })
      break;
    default:
      return state;
  }
  return state;
}

function expenses(state=[], action) {
  console.log(state, action);
  return state;
}

const userReducer = combineReducers({user, expenses, routing: routerReducer });

export default userReducer;
