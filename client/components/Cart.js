import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

export class Cart extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div>
                <h1>This is your cart!!!!</h1>
                {/* This where I will put the map function to display all items in the cart */}
            </div>
            
            
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
