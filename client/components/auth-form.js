import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {auth} from '../store';
import {Link} from 'react-router-dom';
import './styles/auth-form.css';

/**
 * COMPONENT
 */
const AuthForm = (props) => {
  const {name, handleSubmit, error} = props;

  return (
    <div id="auth-wrapper">
      <div id="login-wrapper">
        Login Form
        <form onSubmit={handleSubmit} name={name}>
          <div id="inputwrap">
            <label htmlFor="email">Email</label>
            <input name="email" type="text" placeholder="Email" />
          </div>
          <div className="inputwrap">
            <label htmlFor="password">Password</label>
            <input name="password" type="password" placeholder="Password" />
          </div>

          {error && error.response && <div> {error.response.data} </div>}

          <button type="submit" id="login-button">
            Log In
          </button>
        </form>
        <small>Forgot your password?</small>
        <a href="/auth/google">Login with Google</a>
      </div>
      <div id="register-wrapper">
        <div>
          Why make an account? You get access to our rewards, and the option to
          sign up for our newsletter- so that you'll be the first to discover
          our newest flavors!
        </div>
        <Link to="/signup">
          <button id="reg-button" type="submit">
            Need an Account?
          </button>
        </Link>
      </div>
    </div>
  );
};

const mapLogin = (state) => {
  return {
    error: state.user.error,
  };
};

const mapDispatch = (dispatch) => {
  return {
    handleSubmit(evt) {
      evt.preventDefault();
      const email = evt.target.email.value;
      const password = evt.target.password.value;
      dispatch(auth(email, password));
    },
  };
};

export const Login = connect(mapLogin, mapDispatch)(AuthForm);

/**
 * PROP TYPES
 */
AuthForm.propTypes = {
  name: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.object,
};
