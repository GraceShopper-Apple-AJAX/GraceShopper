import React from 'react'
import {connect} from 'react-redux'
import {fetchSingleProduct} from '../store/singleProduct'

class SingleProduct extends React.Component {
  componentDidMount() {
    this.props.fetchSingleProduct(this.props.match.params.productId)
  }

  getStatusMessage = (product) => {
    if (product.status === 'in_stock') {
      return 'In stock'
    } else if (product.status === 'running_low') {
      return 'Running low'
    } else {
      return 'Out of stock'
    }
  }

  render() {
    const product = this.props.product
    if (product === null) {
      return <h3>There was a problem fetching this product!</h3>
    }

    return (
      <div>
        <div className="single-product-details">
          <h1>Product Details:</h1>
          <img src={product.imageUrl} className="single-product-image" />
          <h3>Name: {product.name} </h3>
          <h3>Description: {product.description} </h3>
          <h3>Status: {this.getStatusMessage(product)}</h3>
          {product.status === 'out_of_stock' ? undefined : (
            <h3> Quantity: {product.quantity} </h3>
          )}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    student: state.product,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSingleProduct: (id) => dispatch(fetchSingleProduct(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct)
