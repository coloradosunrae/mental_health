import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
// import './Login.css';

class Login extends Component {

  constructor() {
    super();
    this.state = {
      lastname: '',
      firstname: '',
      messageInput: ''
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { lastname, firstname, messageInput } = this.state;

    axios.post('/api/auth/clientlogin', { lastname, firstname, messageInput })
      .then((result) => {
        this.props.history.push("/login")
      });
  }


  render() {
    const { lastname, firstname, messageInput } = this.state;
    return (
      <div class="container">
        <form class="form-signin" onSubmit={this.onSubmit}>
          <h2 class="form-signin-heading">Please sign in</h2>
          <label for="inputEmail" class="sr-only">First Name</label>
          <input type="email" class="form-control" placeholder="First Name" name="firstname" value={lastname} onChange={this.onChange} required/>
          <label for="inputPassword" class="sr-only">Password</label>
          <input type="password" class="form-control" placeholder="Password" name="password" value={firstname} onChange={this.onChange} required/>
          <label for="inputPassword" class="sr-only">Password</label>
          <input type="password" class="form-control" placeholder="Password" name="password" value={messageInput} onChange={this.onChange} required/>
          <button class="btn btn-lg btn-primary btn-block" type="submit">Login</button>
        </form>
      </div>
    );
  }
}

export default Login;