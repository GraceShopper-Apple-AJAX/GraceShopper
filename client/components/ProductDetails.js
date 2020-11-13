import React from 'react';
import {Link} from 'react-router-dom';

const ProductDetails = (props) => {
  const products = props.products;

  return products.map((product) => (
    <div key={product.id}>
      <Link to={`/products/${product.id}`}>
        <h3> {product.name} </h3>
        <img src={product.imageUrl} height="200" />
      </Link>
      <button
        name={props.buttonLabel}
        type="button"
        /*/</div>onClick={() => props.addAction(product)}/*/
      >
        {props.buttonLabel}
      </button>
    </div>
  ));
};

export default ProductDetails;
