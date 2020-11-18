import React from 'react';
import { connect } from 'react-redux';
import {Link, withRouter} from 'react-router-dom';
import updateUserThunk from '../store/user';
import {fetchSingleUser} from '../store/admin-single-user';

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

    componentDidMount() {
        this.props.fetchSingleUser(this.props.match.params.userId);
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
            console.log(this.props.match.params)
            await this.props.update(this.props.match.params.user.id);
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
            console.log(err);
        }
    }

    render() {
        const user = this.props.user;
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                <label htmlFor="First Name">
                        <input
                            type="text"
                            name="firstName"
                            onChange={this.handleChange}
                            value={user.firstName}
                            placeholder="First Name"
                        />
                </label>
                <br />
                <label htmlFor="Last Name">
                        <input
                            type="text"
                            name="lastName"
                            onChange={this.handleChange}
                            value={user.lastName}
                            placeholder="Last Name"
                        />
                </label>
                <br />
                <label htmlFor="Phone Number">
                        <input
                            type="text"
                            name="mobile"
                            onChange={this.handleChange}
                            value={user.mobile}
                            placeholder="Phone Number"
                        />
                </label>
                <br />
                <label htmlFor="E-Mail">
                        <input
                            type="text"
                            name="email"
                            onChange={this.handleChange}
                            value={user.email}
                            placeholder="E-Mail Address"
                        />
                </label>
                <br />
                <label htmlFor="Street Address">
                        <input
                            type="text"
                            name="address_line1"
                            onChange={this.handleChange}
                            value={user.address_line1}
                            placeholder="Street Address"
                        />
                </label>
                <br />
                <label htmlFor="Street Address 2 (optional)">
                        <input
                            type="text"
                            name="address_line2"
                            onChange={this.handleChange}
                            value={user.address_line2}
                            placeholder="Street Address 2 (optional)"
                        />
                </label>
                <br />
                <label htmlFor="City">
                        <input
                            type="text"
                            name="city"
                            onChange={this.handleChange}
                            value={user.city}
                            placeholder="City"
                        />
                </label>
                <br />
                <label htmlFor="Zip/Postal Code">
                        <input
                            type="text"
                            name="zip"
                            onChange={this.handleChange}
                            value={user.zip}
                            placeholder="Zip/Postal Code"
                        />
                </label>
                <br />
                <label htmlFor="State/Province">
                        <input
                            type="text"
                            name="state_or_province"
                            onChange={this.handleChange}
                            value={user.state_or_province}
                            placeholder="State/Province"
                        />
                </label>
                <br />
                <label htmlFor="Country">
                        <input
                            type="text"
                            name="country"
                            onChange={this.handleChange}
                            value={user.country}
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
        update: (user) => dispatch(updateUserThunk(user)),
        fetchSingleUser: (id) => dispatch(fetchSingleUser(id))
    }
}

export default withRouter(connect(mapState, mapDispatch)(UpdateUser));