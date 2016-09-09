import React from 'react';
import ReactDOM from 'react-dom';
import Pie from './category_pie'
import TimeChart from './time_chart'
import ProgressBar from './progress_bar'
import Expense from './expense'
import Nav from './nav'
import {Router, Route, Link} from 'react-router'

export default class DashBoard extends React.Component {
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
