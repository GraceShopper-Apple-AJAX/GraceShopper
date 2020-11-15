import React from 'react';
import {Link} from 'react-router-dom';

const UserList = (props) => {
  const users = props.users;

  return (
    <table style={{border: '1px solid black'}}>
      <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Email</th>
      </tr>
      {users.map((user) => (
        <tr key={user.id}>
          <td>
            <Link to={`/admin/users/${user.id}`}>{user.firstName} </Link>
          </td>
          <td>{user.lastName}</td>
          <td>{user.email}</td>
        </tr>
      ))}
    </table>
  );
};

export default UserList;
