import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {logout} from '../store';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faShoppingCart,
  faUserCircle,
  faSignInAlt,
  faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons';
import './styles/Navbar.css';

const Navbar = ({handleClick, isLoggedIn, firstName, role}) => (
  <div id="nav-container">
    <header id="logo-header">
      <div className="search-container">
        <form id="search-expand">
          <input type="search"></input>
        </form>
      </div>

      <div id="right">
        {isLoggedIn ? (
          <div id="rightlink">
            <React.Fragment>
              <a href="#" onClick={handleClick}>
                <div className="icon">
                  <FontAwesomeIcon icon={faSignOutAlt} />
                </div>
                <p>logout</p>
              </a>
            </React.Fragment>
          </div>
        ) : (
          <div id="rightlink">
            <React.Fragment>
              <Link to="/login">
                <div className="icon">
                  <FontAwesomeIcon icon={faSignInAlt} />
                </div>
                <p>sign in/</p>
                <p>register</p>
              </Link>
            </React.Fragment>
          </div>
        )}
        <div id="rightlink">
          <Link to="/myaccount">
            <div className="icon">
              <FontAwesomeIcon icon={faUserCircle} />
            </div>
            <p>Account</p>
          </Link>
        </div>
        <div id="rightlink">
          <Link to="/cart">
            <div className="icon">
              <FontAwesomeIcon icon={faShoppingCart} />
            </div>
            <p>cart</p>
          </Link>
        </div>
      </div>
    </header>
    <div id="usergreet">
      <h3>Welcome, {isLoggedIn ? firstName : 'Guest'}</h3>
    </div>
    <h1 id="webtitle">Sugar Shack</h1>
    <div id="nav-links">
      <Link to="/home">Home</Link>
      <Link to="/products">Browse</Link>
      <Link to="/home">About Us</Link>
      <Link to="/home">Contact</Link>
      {role === 'admin' ? <Link to="/admin">Admin Panel</Link> : null}
    </div>
  </div>
);

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    isLoggedIn: !!state.user.id,
    firstName: state.user.firstName,
    role: state.user.role,
  };
};

const mapDispatch = (dispatch) => {
  return {
    handleClick() {
      dispatch(logout());
    },
  };
};

export default connect(mapState, mapDispatch)(Navbar);

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
};
