import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { Router, Route, browserHistory } from 'react-router';
import reducer from '../reducer'
import DashBoard from './dashboard'
import Login from './login'
import Signup from './signup'
import Profile from './profile'
import Nav from './nav'
import App from './app'

const state = {};

let store = createStore(reducer, state)

// const Root = ({ store }) => (
//   <Provider store={store}>
//     <Router history={browserHistory}>
//       <Route path="/(:filter)" component={App} />
//     </Router>
//   </Provider>
// );

// Root.propTypes = {
//   store: PropTypes.object.isRequired,
// };

function mapStateToProps(state)

const Root = connect(mapS)

ReactDOM.render((
	<Provider store={store}>
	  <Router history={browserHistory}>
	    <Route path="/" component={App} >
	      <Route path="/dashboard/:userName" component={DashBoard} />
	      <Route path="/login" component={Login} />
	      <Route path="/signup" component={Signup} />
	      <Route path="/profile" component={Profile} />
	    </Route>
	  </Router>
  </Provider>
), document.getElementById('content'));
