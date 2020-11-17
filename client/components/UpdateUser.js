import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import updateUserThunk from '../store/user';
import {auth} from '../store';

class UpdateUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            mobile: '',
            email: '',
            address_line1: '',
            address_line2: '',
            city: '',
            zip: '',
            state_or_province: '',
            country: '',
            password: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async handleChange (event) {
        await this.setState({
            [event.target.name]: event.target.value
        });
    }

    async handleSubmit (event) {
        event.preventDefault();
        try {
            console.log(this.props)
            await this.props.update(this.props.user.id, this.state);
            this.setState({
                firstName: '',
                lastName: '',
                mobile: '',
                email: '',
                address_line1: '',
                address_line2: '',
                city: '',
                zip: '',
                state_or_province: '',
                country: '',
                password: ''
            });
        } catch (err) {
            console.log(this.props)
            console.log(err);
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                <label htmlFor="First Name">
                        <input
                            type="text"
                            name="firstName"
                            onChange={this.handleChange}
                            value={this.state.firstName}
                            placeholder="First Name"
                        />
                </label>
                <br />
                <label htmlFor="Last Name">
                        <input
                            type="text"
                            name="lastName"
                            onChange={this.handleChange}
                            value={this.state.lastName}
                            placeholder="Last Name"
                        />
                </label>
                <br />
                <label htmlFor="Phone Number">
                        <input
                            type="text"
                            name="mobile"
                            onChange={this.handleChange}
                            value={this.state.mobile}
                            placeholder="Phone Number"
                        />
                </label>
                <br />
                <label htmlFor="E-Mail">
                        <input
                            type="text"
                            name="email"
                            onChange={this.handleChange}
                            value={this.state.email}
                            placeholder="E-Mail Address"
                        />
                </label>
                <br />
                <label htmlFor="Street Address">
                        <input
                            type="text"
                            name="address_line1"
                            onChange={this.handleChange}
                            value={this.state.address_line1}
                            placeholder="Street Address"
                        />
                </label>
                <br />
                <label htmlFor="Street Address 2 (optional)">
                        <input
                            type="text"
                            name="address_line2"
                            onChange={this.handleChange}
                            value={this.state.address_line2}
                            placeholder="Street Address 2 (optional)"
                        />
                </label>
                <br />
                <label htmlFor="City">
                        <input
                            type="text"
                            name="city"
                            onChange={this.handleChange}
                            value={this.state.city}
                            placeholder="City"
                        />
                </label>
                <br />
                <label htmlFor="Zip/Postal Code">
                        <input
                            type="text"
                            name="zip"
                            onChange={this.handleChange}
                            value={this.state.zip}
                            placeholder="Zip/Postal Code"
                        />
                </label>
                <br />
                <label htmlFor="State/Province">
                        <input
                            type="text"
                            name="state_or_province"
                            onChange={this.handleChange}
                            value={this.state.state_or_province}
                            placeholder="State/Province"
                        />
                </label>
                <br />
                <label htmlFor="Country">
                        <input
                            type="text"
                            name="country"
                            onChange={this.handleChange}
                            value={this.state.country}
                            placeholder="Country"
                        />
                </label>
                <br />
                <label htmlFor="Password (required)">
                        <input
                            type="password"
                            name="password"
                            onChange={this.handleChange}
                            value={this.state.password}
                            placeholder="Password (required)"
                        />
                </label>
                <br />
                <label htmlFor="Confirm Password">
                        <input
                            type="password"
                            name="confirmPassword"
                            onChange={this.handleChange}
                            value={this.state.confirmPassword}
                            placeholder="Confirm Password"
                        />
                </label>
                <br />
                <button type="submit">Update Details</button>
                </form>
            </div>
        )
    }
}

const mapState = (state) => {
    return {
        user: state.user
    }
}

const mapDispatch = (dispatch) => {
    return {
        update: (studentId, localState) => dispatch(updateUserThunk(userId, localState))
    }
}

export default connect(mapState, mapDispatch)(UpdateUser);