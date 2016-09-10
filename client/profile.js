import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './nav';

export default class Profile extends React.Component {
  render() {
    console.log('this is props', this.props)
    return (
      <div>
        <br />
        <h1 > {JSON.stringify(this.props.user)}< /h1>
      </div>
  )
  }
}
