import React from 'react';
import {Link} from 'react-router-dom';

const UserList = (props) => {
  const products = props.products;

  return (
    <table style={{border: '1px solid black'}}>
      <tbody>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Role</th>
        </tr>
        {products.map((product) => (
          <tr key={product.id}>
            <td>
              <Link to={`/admin/products/${product.id}`}>
                {product.firstName}{' '}
              </Link>
            </td>
            <td>
              <Link to={`/admin/products/${product.id}`}>{product.name} </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserList;
