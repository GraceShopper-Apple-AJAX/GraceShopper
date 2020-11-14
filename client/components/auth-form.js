import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {auth} from '../store';

/**
 * COMPONENT
 */
const AuthForm = (props) => {
  const {name, handleSubmit, error} = props;

  return (
    <div>
      Login Form
      <form onSubmit={handleSubmit} name={name}>
        <div>
          <label htmlFor="email">
            <small>Email</small>
          </label>
          <input name="email" type="text" />
        </div>
        <div>
          <label htmlFor="password">
            <small>Password</small>
          </label>
          <input name="password" type="password" />
        </div>
        <div>
          <button type="submit">Log In</button>
        </div>
        {error && error.response && <div> {error.response.data} </div>}
      </form>
      <a href="/auth/google">Login with Google</a>
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
