import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {Route} from 'react-router-dom';

import './styles/User-Home.css';

/**
 * COMPONENT
 */
export const MyAccount = (props) => {
  const {isLoggedIn, firstName, role} = props;

  return (
    <div>
      my orders
      edit account
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
};
