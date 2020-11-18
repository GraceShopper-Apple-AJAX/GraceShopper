import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {Link} from 'react-router-dom';

import {updateCart, fetchCart, deleteCart, deleteFromCart} from '../store/cart';

import './styles/Cart.css';

export class Cart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    this.props.fetchCart(this.props.match.params.userId);
  }

  //need to show and update cart total + shipping, number of items

  //calculate total price + shipping

  //get cart based on user id or sessionId if not logged in?

  render() {
    const cart = this.props;

    return (
      <div id="cartpage-wrapper">
        <div id="carttitle">
          <h3>My Cart</h3>
          <Link to="/products">Continue Shopping</Link>
        </div>

        <div id="cart-wrap">
          <div id="cartitem-wrapper">
            <div id="clear-cart-button">
              <button>Clear Cart</button>

              {this.props.cart ? (
                <div>
                  <table id="itemtable">
                    <tbody>
                      <tr>
                        <th width="100px"></th>
                        <th width="120px" className="centeralign">
                          Item Name
                        </th>
                        <th>Size</th>
                        <th>Price</th>
                        <th width="40px" className="rightalign">
                          Qty
                        </th>
                      </tr>
                      {cart.cartItems.map((product) => (
                        <tr key={product.productId}>
                          <td id="checkout-thumb">{product.imageUrl}</td>
                          <td>{product.name}</td>
                          <td>{product.selected_size}</td>
                          <td>{product.price}</td>
                          <td>-{product.quantity}+</td>
                          <td>
                            <button
                              onClick={() =>
                                this.props.deleteFromCart(
                                  quantity,
                                  selected_size,
                                  productId
                                )
                              }
                            >
                              x
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                'Your cart is empty.'
              )}
            </div>
          </div>

          <div id="summary-wrapper">
            <h4>Order Summary:</h4>
            <div>Number Items</div>
            <table id="summary-table">
              <tbody>
                <tr>
                  <th>Item Total</th>
                  <td>{cart.length} Items</td>
                </tr>

                <tr>
                  <th>Shipping</th>
                  <td>{cart.total >= 100 ? 'Free' : '$35.00'}</td>
                </tr>
                <tr>
                  <th>Total</th>
                  <td>CART PRICE + SHIPPING</td>
                </tr>
              </tbody>
            </table>

            <Link to="/checkout">
              <button id="checkout-button" disabled={cart ? '' : 'disabled'}>
                Checkout
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    userId: state.user.id,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCart(userId) {
      dispatch(fetchCart(userId));
    },
    updateCart(quantity, selected_size, productId) {
      dispatch(updateCart(quantity, selected_size, productId));
    },
    deleteFromCart(quantity, selectedSize, productId) {
      dispatch(deleteFromCart(quantity, selectedSize, productId));
    },
    deleteCart(cart) {
      dispatch(deleteCart(cart));
    },
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Cart));
