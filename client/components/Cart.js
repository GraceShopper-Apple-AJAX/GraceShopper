import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

export class Cart extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <h1>This is your cart!!!!</h1>
        )
    }
}

const mapState = (state) => {
    return {}
}

const mapDispatch = (dispatch) => {
    return {}
}

export default withRouter(connect(mapState, mapDispatch)(Cart))
