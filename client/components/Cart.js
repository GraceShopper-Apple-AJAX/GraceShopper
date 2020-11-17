import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {Link} from 'react-router-dom';
import {Button, Confirm} from 'semantic-ui-react';

import SingleProduct from './SingleProduct';
import {updateCart, fetchCart, deleteCart, deleteFromCart} from '../store/cart';

import './styles/Cart.css';

export class Cart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {open: false};
  }

  show = () => this.setState({open: true});

  handleConfirm = () => this.setState({result: 'confirmed', open: false});
  handleCancel = () => this.setState({result: 'cancelled', open: false});

  //if user doesn't have items in cart, can't checkout AND the items box says "your cart is empty"

  //delete button removes all instances from the cart, or can change quantity with + - buttons

  //need to show and update cart total + shipping, number of items

  //calculate total price + shipping

  //get cart based on user id or sessionId if not logged in?
  componentDidMount() {
    if (this.props.userId) {
      //get cart based on user id
    } else {
      this.props.fetchCart(this.props.match.params.orderId);
    }
  }

  // async clearCartItems(cart){
  //   try{
  //     await this.props.deleteCartItems(cart);
  //     this.props.fetchCart
  //   } catch(err){
  //     console.error(err)
  //   }
  // }

  render() {
    const cartProducts = this.props;

    return (
      <div id="cartpage-wrapper">
        <div id="carttitle">
          <h3>My Cart</h3>
          <Link to="/products">Continue Shopping</Link>
        </div>

        <div id="clear-cart-button">
          <button>Clear Cart</button>

          <div id="cart-wrap">
            <div id="cartitem-wrapper">
              {this.cartProducts.length ? (
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
                      {cartProducts.map((product) => (
                        <tr key={product.id}>
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
            <div>{quantity}Items</div>
            <table id="summary-table">
              <tbody>
                <tr>
                  <th>Item Total</th>
                  <td>NUMBER OF CART ITEMS</td>
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
              <button
                id="checkout-button"
                disabled={this.state.cartProducts.length ? '' : 'disabled'}
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
    cartProducts: state.cart.order_items,
    userId: state.user.id,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCart: (cart) => dispatch(fetchCart(cart)),

    updateCart: (quantity, selected_size, productId) =>
      dispatch(updateCart(quantity, selected_size, productId)),

    deleteFromCart: (quantity, selectedSize, productId) =>
      dispatch(deleteFromCart(quantity, selectedSize, productId)),

    deleteCart: (cart) => dispatch(deleteCart(cart)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Cart));
