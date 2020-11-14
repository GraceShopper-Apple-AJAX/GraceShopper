import React from 'react';
import {Link} from 'react-router-dom';
import './styles/ProductDetails.css';

const ProductDetails = (props) => {
  const products = props.products;

  return products.map((product) => (
    <div key={product.id} id="each-product">
      <Link to={`/products/${product.id}`}>
        <h3> {product.name} </h3>
        <img src={product.imageUrl} height="200" />
      </Link>
    </div>
  ));
};

export default ProductDetails;
