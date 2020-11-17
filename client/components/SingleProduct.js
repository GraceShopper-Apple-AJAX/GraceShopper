import React from 'react';
import {connect} from 'react-redux';
import {fetchSingleProduct} from '../store/singleProduct';
import {updateCart} from '../store/cart';

class SingleProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 0,
      selected_size: null,
      totalPrice: 0,
      itemPrice: 0,
      showAdded: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.addToCart = this.addToCart.bind(this);
  }
  componentDidMount() {
    this.props.fetchSingleProduct(this.props.match.params.productId);
  }

  //add / decrease quantity
  incrementQuantity = () => {
    this.setState((prevState) => {
      return {
        quantity: prevState.quantity + 1,
      };
    });
  };

  decrementQuantity = () => {
    this.setState((prevState) => {
      if (prevState.quantity > 0) {
        return {
          quantity: prevState.quantity - 1,
        };
      } else {
        return null;
      }
    });
  };

  //add total Price
  addTotal = (itemPrice) => {
    this.setState((prevState) => {
      return {
        totalPrice: prevState.totalPrice + itemPrice,
      };
    });
  };

  //add to cart, if successful show a component that says "[number][item] added to your cart!"
  //ALSO clear quantity/price after adding to cart?
  //ADD TO CART DECLINED ONLY IF there is another item with the same id AND size
  addToCart = () => {
    this.setState({
      showAdded: true,
    });
  };

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  getStatusMessage = (product) => {
    if (product.status === 'running_low') {
      return 'We seem to be running low on this item!';
    } else if (product.status === 'out_of_stock') {
      return 'Sorry, this item is out of stock. Check back soon for updates!';
    } else {
      return undefined;
    }
  };

  getSize(size, product) {
    if (size === 'Scoop') {
      return (
        <>
          ${product.scoop_price}{' '}
          <input value={this.state.quantity} onChange={this.handleChange} />
        </>
      );
    } else if (size === 'Pint') {
      return (
        <>
          ${product.pint_price}{' '}
          <input value={this.state.quantity} onChange={this.handleChange} />
        </>
      );
    } else {
      return (
        <>
          ${product.tub_price}{' '}
          <input value={this.state.quantity} onChange={this.handleChange} />
        </>
      );
    }
  }

  render() {
    const product = this.props.product;
    if (product === null) {
      return <h3>There was a problem fetching this product!</h3>;
    }

    const addQuantity = <button onClick={this.incrementQuantity}>+</button>;
    const decreaseQuantity = (
      <button onClick={this.decrementQuantity}>-</button>
    );

    return (
      <div className="page-wrap">
        <div className="component-wrap">
          <div className="single-product-details">
            {this.state.showAdded ? (
              <div>
                added {this.state.quantity}
                {product.name}
                {this.state.quantity > 1 ? 's' : null} to cart
              </div>
            ) : null}
            <h1>{product.name}</h1>
            <img
              src={product.imageUrl}
              className="single-product-image"
              height="200"
            />
            <h3>Description:</h3> {product.description}
            <h3>Choose Size and Quantity:</h3>
            <select id="dropdown" onChange={this.handleChange}>
              <option value="scoop">Scoop</option>
              <option value="pint">Pint</option>
              <option value="tub">Tub</option>
            </select>
            <h3>
              {decreaseQuantity}Quantity{addQuantity}
            </h3>
            <h3>Number of Items:</h3> {this.state.quantity}
            <h3>Total Price:</h3> {this.state.totalPrice}
            <button
              type="button"
              onClick={() =>
                updateCart(
                  this.state.quantity,
                  this.state.selected_size,
                  this.props.product.id
                )
              }
            >
              Add to Cart
            </button>
            {product.status === 'in_stock' ? undefined : (
              <>
                {' '}
                <h3> Status:</h3> {this.getStatusMessage(product)}
              </>
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    product: state.singleProduct,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSingleProduct: (id) => dispatch(fetchSingleProduct(id)),
    updateCart: (quantity, selected_size, productId) =>
      dispatch(updateCart(quantity, selected_size, productId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct);
