import React from 'react';
import {Link} from 'react-router-dom';
import './styles/AdminProducts.css';

const AdminProductList = (props) => {
  const products = props.products;

  return (
    <div>
      <Link to="/admin/addproduct">
        <button>New Product</button>
      </Link>

      <table style={{border: '1px solid black'}}>
        <tbody>
          <tr>
            <th>ID</th>
            <th>Image</th>
            <th>Name</th>
            <th>Description</th>
          </tr>
          {products.map((product) => (
            <tr key={product.id}>
              <td>
                {' '}
                <Link to={`/admin/products/${product.id}`}>{product.id}</Link>
              </td>
              <td>
                {' '}
                <Link to={`/admin/products/${product.id}`}>
                  <img src={product.imageUrl} id="single-product-thumb"></img>{' '}
                </Link>
              </td>
              <td>
                <Link to={`/admin/products/${product.id}`}>
                  {product.name}{' '}
                </Link>
              </td>
              <td>{product.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminProductList;
