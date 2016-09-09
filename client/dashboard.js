import React from 'react';
import {Router, Route, Link} from 'react-router'
import ReactDOM from 'react-dom';
import Pie from './category_pie'
import TimeChart from './time_chart'
import ProgressBar from './progress_bar'
import Expense from './expense'

class DashBoard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      <Pie />
      <ProgressBar />
      <Expense />
      <TimeChart />
      </div>
    )
  }
}

ReactDOM.render( < DashBoard / > , document.getElementById('content'));
