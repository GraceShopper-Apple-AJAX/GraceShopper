import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {Link} from 'react-router-dom';

import {updateCart, fetchCart, deleteCart, deleteFromCart} from '../store/cart';

import './styles/Cart.css';

export class Cart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      quantity: 0,
    };
  }

  componentDidMount() {
    this.props.fetchCart(this.props.match.params.userId);
  }

  //need to show and update cart total + shipping, number of items

  //calculate total price + shipping

  //get cart based on user id or sessionId if not logged in?

  render() {
    const {cart} = this.props;

    // const totalItemPrice = () => {
    //   let total = 0;
    //   for (const item in cart.Order_Items) {
    //     if (item.selected_size === 'scoop') {
    //       total += cart.product.scoop_price;
    //     } else if (item.selected_size === 'tub') {
    //       total += cart.product.tub_price;
    //     } else {
    //       total += cart.product.pint_price
    //     }
    //   }
    //   return total;
    // };

    const shipping = this.totalItemPrice >= 100 ? 'Free' : '$35.00';

    return (
      <div id="cartpage-wrapper">
        <div id="carttitle">
          <h3>My Cart</h3>
          <Link to="/products">Continue Shopping</Link>
        </div>

        <div id="cart-wrap">
          <div id="cartitem-wrapper">
            <div id="clear-cart-button">
              <button type="button" onClick={() => this.props.deleteCart()}>
                Clear Cart
              </button>
              {cart.Order_Items !== undefined ? (
                <div>
                  <table id="itemtable">
                    <tbody>
                      <tr>
                        <th width="100px"></th>
                        <th width="120px" className="centeralign">
                          Size
                        </th>
                        <th>Amount</th>
                        {/* <th>Price</th> */}
                        <th width="40px" className="rightalign">
                          Remove
                        </th>
                      </tr>
                      {cart.Order_Items.map((orderItem) => (
                        <tr key={orderItem.productId}>
                          <td id="checkout-thumb">{orderItem.imageUrl}</td>
                          {/* <td>{cart.product.id === orderItem.productId ? cart.product.name : undefined}</td> */}
                          <td>{orderItem.selected_size}</td>
                          {/* <td>{orderItem.price}</td> */}
                          <td>-{orderItem.quantity}+</td>
                          <td>
                            <button
                              type="button"
                              onClick={() =>
                                this.props.deleteFromCart(orderItem.productId)
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
            {/* <div>Number of Items</div> */}
            <table id="summary-table">
              <tbody>
                <tr>
                  <th>Items</th>
                  <td>
                    {cart.Order_Items ? cart.Order_Items.length : undefined}
                  </td>
                </tr>

                <tr>
                  <th>Shipping</th>
                  <td>{shipping}</td>
                </tr>
                {/* <tr>
                  <th>Total</th>
                  <td>{this.totalItemPrice} + {this.shipping}</td>
                </tr> */}
              </tbody>
            </table>

            <Link to="/checkout">
              <button
                id="checkout-button"
                type="button"
                disabled={cart ? '' : 'disabled'}
              >
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
    deleteFromCart(productId) {
      dispatch(deleteFromCart(productId));
    },
    deleteCart() {
      dispatch(deleteCart());
    },
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Cart));
