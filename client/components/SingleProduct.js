import React from 'react';
import {connect} from 'react-redux';
import {fetchSingleProduct} from '../store/singleProduct';

class SingleProduct extends React.Component {
  componentDidMount() {
    this.props.fetchSingleProduct(this.props.match.params.productId);
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

  render() {
    const product = this.props.product;
    if (product === null) {
      return <h3>There was a problem fetching this product!</h3>;
    }

    return (
      <div className="page-wrap">
        <div className="component-wrap">
          <div className="single-product-details">
            <h1>{product.name}</h1>
            <img
              src={product.imageUrl}
              className="single-product-image"
              height="200"
            />
            <h3>Prices:</h3>
            <ul>
              <li>
                Scoop - ${product.scoop_price} (
                {product.status === 'in_stock'
                  ? product.scoop_quantity
                  : undefined}{' '}
                remaining)
              </li>
              <li>
                Pint - ${product.pint_price} (
                {product.status === 'in_stock'
                  ? product.pint_quantity
                  : undefined}{' '}
                remaining)
              </li>
              <li>
                Tub - ${product.tub_price} (
                {product.status === 'in_stock'
                  ? product.tub_quantity
                  : undefined}{' '}
                remaining)
              </li>
            </ul>
            <h3>Description:</h3> {product.description}
            {product.status === 'in_stock' ? undefined : (
              <>
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct);
