import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import {addUserThunk} from '../store/user';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import axios from 'axios';

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      mobile: '',
      password: '',
      confirmPassword: '',
      redirectTo: null,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    axios
      .post('/api/users', {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        mobile: this.state.mobile,
        password: this.state.password,
        confirmPassword: this.state.confirmPassword,
      })
      .then((response) => {
        console.log(response);
        if (
          !response.data.error &&
          this.state.password === this.state.confirmPassword
        ) {
          console.log('success - user created');
          this.setState({
            //redirect to login page
            redirectTo: '/login',
          });
        } else {
          console.log('username already taken');
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    if (this.state.redirectTo) {
      return <Redirect to={{pathname: this.state.redirectTo}} />;
    } else {
      return (
        <div className="page-wrap">
        <div className="component-wrap">
          <h4>Fields marked with an asterisk (*) are required.</h4>
          <form>
            <div>
              <div>
                <label htmlFor="firstName">First Name</label>
              </div>
              <div>
                <input
                  className="form-input"
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="firstName"
                  value={this.state.firstName}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div>
              <div>
                <label htmlFor="lastName">Last Name</label>
              </div>
              <div>
                <input
                  className="form-input"
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="lastName"
                  value={this.state.lastName}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div>
              <div>
                <label htmlFor="email">Email</label>
              </div>
              <div>
                <input
                  className="form-input"
                  type="text"
                  id="email"
                  name="email"
                  placeholder="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div>
              <div>
                <label htmlFor="mobile">Phone Number</label>
              </div>
              <div>
                <input
                  className="form-input"
                  type="text"
                  id="mobile"
                  name="mobile"
                  placeholder="mobile"
                  value={this.state.mobile}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div>
              <div>
                <label htmlFor="password">Password: </label>
              </div>
              <div>
                <input
                  className="form-input"
                  placeholder="password"
                  type="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div>
              <div>
                <label className="form-label" htmlFor="confirmPassword">
                  Confirm Password:{' '}
                </label>
              </div>
              <div>
                <input
                  className="form-input"
                  placeholder="confirm password"
                  type="password"
                  name="confirmPassword"
                  value={this.state.confirmPassword}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div>
              <div />
              <button onClick={this.handleSubmit} type="submit">
                Sign up
              </button>
            </div>
          </form>
        </div>
        </div>
      );
    }
  }
}

export default Signup;
