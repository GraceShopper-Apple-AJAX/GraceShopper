import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link, Route, Redirect} from 'react-router-dom';
import UpdateUser from './UpdateUser';
import {Login} from './auth-form';
import './styles/MyAccount.css';

/**
 * COMPONENT
 */
export const MyAccount = (props) => {
  const {isLoggedIn} = props;

  return (
    <div id='my-account'>
      {isLoggedIn ? (
        <div id='acc-elements'>
          <div class='acc-element' id='acc-settings-title'>
            <h2>Acount Settings</h2>
          </div>
          <div class='acc-element'>
            <h3>My Account</h3>
          </div>
          <div class='acc-element'>
            <h3>Edit Account</h3>
            <UpdateUser />
          </div>
          <div class='acc-element'>
            <h3>Order History</h3>
            <Link to="/orders">View Past Orders</Link>
          </div>
        </div>
      ) : (
        <div>
          <h1>You are not logged in.</h1>
          <Login />
        </div>
      )}
    </div>
  );
};

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    firstName: state.user.firstName,
    isLoggedIn: !!state.user.id,
  };
};

export default connect(mapState)(MyAccount);

/**
 * PROP TYPES
 */
MyAccount.propTypes = {
  email: PropTypes.string,
  isLoggedIn: PropTypes.bool.isRequired,
};
