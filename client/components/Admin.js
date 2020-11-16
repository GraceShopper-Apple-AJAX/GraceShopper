import React from 'react';
import {connect} from 'react-redux';
import {fetchUsers} from '../store/admin-users';
import UserList from './UserList';

export class Admin extends React.Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    const users = this.props.users;
    return (
      <div className="page-wrap">
      <div className="component-wrap">
        <h1>Welcome to the super secret Admin Panel!</h1>
        <div className="user-list">
          <UserList users={users} />
        </div>
      </div>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    users: state.allUsers,
  };
};

const mapDispatch = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  };
};

export default connect(mapState, mapDispatch)(Admin);
