import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './nav'
import t from 'tcomb-form';

const FormSchema = t.struct({
  name: t.String,         // a required string
  password: t.String, // an required password
  rememberMe: t.Boolean   // a boolean
})

export default class Login extends React.Component {

  onSubmit(evt) {
  evt.preventDefault()
  const value = this.refs.form.getValue()
  if (value) {
    console.log(value)
  }
}

  render() {
    return (
      <div>
        < Nav />
        <h1 > login < /h1>
        <form onSubmit={this.onSubmit}>
          <t.form.Form ref="form" type={FormSchema} />
          <div className="form-group">
            <button type="submit" className="btn btn-primary">Save</button>
          </div>
        </form>
      </div>
    )
  }
}
