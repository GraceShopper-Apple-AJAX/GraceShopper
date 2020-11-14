import React from 'react';
import {connect} from 'react-redux';
import {fetchProducts} from '../store/allProducts';
import ProductDetails from './ProductDetails';
import './styles/AllProducts.css';

export class AllProducts extends React.Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    const products = this.props.products;
    return (
      <div className="page-wrap">
        <div className="component-wrap">
          <div id="prod-head">
            <h1>Our Products:</h1>
            <p>
              Jujubes lollipop candy canes tootsie roll croissant. Wafer dessert
              biscuit croissant apple pie tootsie roll sugar plum bear claw.
              Jelly-o lemon drops cookie. Croissant lemon drops muffin chocolate
              cake jelly beans topping gummies cake. Candy canes danish danish
              fruitcake cake. Dessert muffin icing cake.{' '}
            </p>
          </div>
          <div className="product-details">
            <ProductDetails
              products={products}
              buttonLabel="Add to cart"
              /*/addAction={(product) => this.props.addProduct()}/*/
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    products: state.allProducts,
  };
};

const mapDispatch = (dispatch) => {
  return {
    fetchProducts: () => dispatch(fetchProducts()),
  };
};

export default connect(mapState, mapDispatch)(AllProducts);
