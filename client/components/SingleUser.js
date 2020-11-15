import React from 'react';
import {connect} from 'react-redux';
import {fetchSingleUser} from '../store/admin-single-user';

class SingleUser extends React.Component {
  componentDidMount() {
    this.props.fetchSingleUser(this.props.match.params.userId);
  }

  render() {
    const user = this.props.user;
    return (
      <div>
        <div className="single-user">
          <h1>User Information:</h1>
          <ul>
            <li>
              <h3 style={{display: 'inline-flex'}}>Name:</h3> {user.firstName}{' '}
              {user.lastName}
            </li>
            <li>
              <h3 style={{display: 'inline-flex'}}>Email:</h3> {user.email}
            </li>
            <li>
              <h3 style={{display: 'inline-flex'}}> Address:</h3>{' '}
              {user.address_line1}
              {!user.address_line2 ? undefined : (
                <>
                  <h3> Address Line 2: </h3> user.address_line2
                </>
              )}
            </li>
            <li>
              <h3 style={{display: 'inline-flex'}}> City: </h3> {user.city}
            </li>
            <li>
              <h3 style={{display: 'inline-flex'}}> State/Province: </h3>{' '}
              {user.state_or_province}
            </li>
            <li>
              <h3 style={{display: 'inline-flex'}}> Zip: </h3> {user.zip}
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.singleUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSingleUser: (id) => dispatch(fetchSingleUser(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleUser);
