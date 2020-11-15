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
    <div className="page-wrap">
      <div className="component-wrap">
        <div id="auth-wrapper">
          <div id="login-wrapper">
            <h4>Login To Your Account</h4>
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
                Sign In
              </button>
            </form>
            <small>Forgot your password?</small>
            <a href="/auth/google">
              <button className="googleButton">
                <img src="https://www.iconfinder.com/data/icons/social-media-2210/24/Google-512.png"></img>
                <b>Sign in with Google</b>
              </button>
            </a>
          </div>
          <div id="register-wrapper">
            <div id="reg-desc">
              Why make an account? You get access to our rewards, and the option
              to sign up for our newsletter- so that you'll be the first to
              discover our newest flavors!
            </div>
            <Link to="/signup">
              <button id="reg-button" type="submit">
                Register Now
              </button>
            </Link>
            <a href="/auth/google">
              <button className="googleButton">
                <img src="https://www.iconfinder.com/data/icons/social-media-2210/24/Google-512.png"></img>
                <b>Sign up with Google</b>
              </button>
            </a>
          </div>
        </div>
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
  // firstName: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.object,
};
