import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {Link} from 'react-router-dom';

import './styles/Cart.css';

export class Cart extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="cartpage-wrapper">
        <div id="carttitle"><h3>My Cart</h3><Link to="/products">Continue Shopping</Link></div>

        <div id="cart-wrap">
          <div id="cartitem-wrapper">
            <table id="itemtable">
              <tbody>
                <tr>
                <th width="100px"></th>
                  <th width="120px" className="centeralign">Item Name</th>
                  <th>Size</th>
                  <th>Price</th>
                  <th width="40px" className="rightalign">Qty</th>
                  <th></th>
                </tr>
                <tr>
                    <td>
                <img src='https://images.unsplash.com/photo-1569010015992-4a21f02d9e56?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80' id="checkout-thumb"></img>
                </td>
                  <td>item nameeeee</td>
                  <td>Pint</td>
                  <td>$3.99</td>
                  <td>-  1  +</td>
                  <td>X</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div id="summary-wrapper">
            <h4>Order Summary:</h4>
            <div>2 Items</div>
            <table id="summary-table">
              <tbody>
                <tr>
                  <th>Item Total</th>
                  <td>$15.00</td>
                </tr>
                <tr>
                  <th>Shipping</th>
                  <td>$35.00</td>
                </tr>
                <tr>
                  <th>Total</th>
                  <td>$50.00</td>
                </tr>
              </tbody>
            </table>

            <Link to="/checkout">
              <button id="checkout-button" type="submit">
                Checkout
              </button>
            </Link>
          </div>
        </div>

      </div>
    );
  }
}

const mapState = (state) => {
  return {};
};

const mapDispatch = (dispatch) => {
  return {};
};

export default withRouter(connect(mapState, mapDispatch)(Cart));
