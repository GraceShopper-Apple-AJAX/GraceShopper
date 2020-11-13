import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import {Route} from 'react-router-dom'

/**
 * COMPONENT
 */
export const UserHome = props => {
  const {isLoggedIn, firstName, role} = props

  return (
    <div>
      <h3>Welcome, {isLoggedIn ? firstName : 'Guest'}</h3>
      {role === 'admin' ? <Link to="/admin">Admin Panel</Link> : null}
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    firstName: state.user.firstName,
    role: state.user.role,
    isLoggedIn: !!state.user.id
  }
}

export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
