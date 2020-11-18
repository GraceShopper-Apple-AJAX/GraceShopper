import React from 'react';
import {connect} from 'react-redux';
import {fetchUsers} from '../store/admin-users';
import {fetchProducts} from '../store/allProducts';

import UserList from './UserList';
import AdminProductList from './AdminProductList';

export class Admin extends React.Component {
  constructor() {
    super();
    this.state = {
      userPanel: true,
    };
    this.toggleComponent = this.toggleComponent.bind(this);
  }
  componentDidMount() {
    this.props.fetchUsers();
    this.props.fetchProducts();
  }

  // handleChange(event) {
  //   this.setState({
  //     [event.target.name]: event.target.value,
  //   });
  // }

  toggleComponent() {
    this.setState({userPanel: !this.state.userPanel});
  }

  render() {
    const users = this.props.users;
    const products = this.props.products;
    {
      return (
        <div className="page-wrap">
          <div className="component-wrap">
            <h1>Admin Panel</h1>
            <div className="user-list">
              <button onClick={this.toggleComponent}>View/Edit Users</button>
              <button onClick={this.toggleComponent}>View/EditProducts</button>
              {this.state.userPanel ? (
                <UserList users={users} />
              ) : (
                <AdminProductList products={products} />
              )}
            </div>
          </div>
        </div>
      );
    }
  }
}

const mapState = (state) => {
  return {
    users: state.allUsers,
    products: state.allProducts,
  };
};

const mapDispatch = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
    fetchProducts: () => dispatch(fetchProducts()),
  };
};

export default connect(mapState, mapDispatch)(Admin);
