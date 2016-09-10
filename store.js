import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

import userReducer from './reducer';

const defaultState = {
  user: { username: 'mkulinski', email: 'me@michaelkulinski.com'},
  expenses: [{cost: '12', cat: 'food'}]
}

const store = createStore(userReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
