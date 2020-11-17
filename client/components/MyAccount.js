import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link, Route, Redirect} from 'react-router-dom';
import UpdateUser from './UpdateUser';

import {Login} from './auth-form';
import './styles/User-Home.css';

/**
 * COMPONENT
 */
export const MyAccount = (props) => {
  const {isLoggedIn} = props;

  return (
    <div>
      {isLoggedIn ? (
        <div>
          Welcome to account settings<h3>my account</h3>
          <h3>EDIT ACCOUNT</h3>
          <UpdateUser />
          <h3>ORDER HISTORY</h3>
          {/* Might need to change link? */}
          <Link to="/orders">View Past Orders</Link>
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
