import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Success extends Component {
  render() {
    return (
      <div>
        <h1>Order Successful</h1>
        <div>Your order Id:</div>
        <Link to="/myaccount">Go to your account</Link>
      </div>
    );
  }
}

export default Success;
