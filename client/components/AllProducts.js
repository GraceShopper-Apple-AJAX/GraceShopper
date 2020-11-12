import React from 'react'
import {connect} from 'react-redux'
import {fetchProducts} from '../store/allProducts'
import ProductDetails from './ProductDetails'

export class AllProducts extends React.Component {
  componentDidMount() {
    this.props.fetchProducts()
  }

  render() {
    const products = this.props.products
    return (
      <div>
        <h1>Our Products:</h1>
        <div className="product-details">
          <ProductDetails
            products={products}
            buttonLabel="Add to cart"
            /*/addAction={(product) => this.props.addProduct()}/*/
          />
        </div>
      </div>
    )
  }
}

const mapState = (state) => {
  return {
    products: state.products,
  }
}

const mapDispatch = (dispatch) => {
  return {
    fetchProducts: () => dispatch(fetchProducts()),
  }
}

export default connect(mapState, mapDispatch)(AllProducts)
