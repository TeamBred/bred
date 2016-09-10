import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actionCreators from './actions/actionCreators';
import App from './client/app';

function mapStateToProps(state) {
  return {
    user: state.user,
    expenses: state.expenses
  }
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const theirApp = connect(mapStateToProps, mapDispachToProps)(App)

export default theirApp;
