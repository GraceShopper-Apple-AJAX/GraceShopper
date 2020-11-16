import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

export class Cart extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
             <div className="page-wrap">
            <div className="component-wrap">
                This is your cart
              </div></div>
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
