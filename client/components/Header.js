import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {logout} from '../store';

const Header = ({handleClick, isLoggedIn}) => (
  <div>
    <header>
      <h1>Ice Cream Shoppe</h1>
      <Link to="/home">Home</Link>
      {isLoggedIn ? (
        <React.Fragment>
          {/* The navbar will show these links after you log in */}

          <a href="#" onClick={handleClick}>
            Logout
          </a>
        </React.Fragment>
      ) : (
        <React.Fragment>
          {/* The navbar will show these links before you log in */}
          {/* Login component will go here */}
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
        </React.Fragment>
      )}
      <Link to="/cart">Cart</Link>
    </header>
  </div>
);

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    isLoggedIn: !!state.user.id,
  };
};

const mapDispatch = (dispatch) => {
  return {
    handleClick() {
      dispatch(logout());
    },
  };
};

export default connect(mapState, mapDispatch)(Header);

/**
 * PROP TYPES
 */
Header.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
};
