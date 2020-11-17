import React, {Component} from 'react';
import {updateUserThunk} from '../store/user';
import ProgressBar from './Progress-bar';
import Details from './Details';
import Confirmation from './Confirmation';
import Success from './Success';
import Payment from './Payment';
import {connect} from 'react-redux';

import './styles/Checkout.css';

export class Checkout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      step: 1,
      address1: '',
      address2: '',
      city: '',
      country: '',
      zip: '',
      state_or_province: '',
      //payment
      cc_type: '',
      cc_number_secure: '',
      cc_security_code: '',
      cc_expiration: '',
      cardholder_name: '',
    };
    this.nextStep = this.nextStep.bind(this);
    this.prevStep = this.prevStep.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  nextStep = () => {
    const {step} = this.state;
    this.setState({
      step: step + 1,
    });
  };

  prevStep = () => {
    const {step} = this.state;
    this.setState({
      step: step - 1,
    });
  };

  handleChange = (input) => (evt) => {
    this.setState({[input]: evt.target.value});
  };

  async handleSubmit(event) {
    event.preventDefault();
    const user = {
      address_line1: event.target.updateAddress1.value,
      address_line2: event.target.updateAddress2.value,
      city: event.target.updateCity.value,
      country: event.target.updateCountry.value,
      zip: event.target.updateZip.value,
      state_or_province: event.target.updateStateProvince.value,
    };
    await this.props.updateUserThunk(user);
  }

  render() {
    const {step} = this.state;
    const {
      address1,
      address2,
      city,
      country,
      zip,
      state_or_province,
      //credit card info
      cc_type,
      cc_number_secure,
      cc_security_code,
      cc_expiration,
      cardholder_name,
    } = this.state;

    const values = {
      address1,
      address2,
      city,
      country,
      zip,
      state_or_province,
      //credit card info
      cc_type,
      cc_number_secure,
      cc_security_code,
      cc_expiration,
      cardholder_name,
    };

    return (
      <div id="checkout-wrapper">
        <div id="check-wrap">
          Checkout
          <div id="checkout-view">
            {(() => {
              switch (step) {
                case 1:
                  return (
                    <div id="checkwraps">
                      <div id="progress">
                        <ProgressBar
                          bgcolor="#FEC3D4"
                          percentage="25"
                          label="Details"
                          className="checkout-forms"
                        />
                      </div>
                      <Details
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                        className="checkout-forms"
                      />
                    </div>
                  );
                case 2:
                  return (
                    <div id="checkwraps">
                      <div id="progress">
                        <ProgressBar
                          bgcolor="#FDADC3"
                          percentage="50"
                          label="Payment"
                          className="checkout-forms"
                        />
                      </div>
                      <Payment
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                        className="checkout-forms"
                      />
                    </div>
                  );
                case 3:
                  return (
                    <div id="checkwraps">
                      <div id="progress">
                        <ProgressBar
                          bgcolor="#FD95B3"
                          percentage="75"
                          label="Confirm"
                        />
                      </div>
                      <Confirmation
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        values={values}
                      />
                    </div>
                  );
                case 4:
                  return (
                    <div id="checkwraps">
                      <div id="progress">
                        <ProgressBar
                          bgcolor="#FB2562"
                          percentage="100"
                          label="Done"
                        />
                      </div>
                      <Success />
                    </div>
                  );
              }
            })()}
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatch = (dispatch) => {
  return {
    updateUserThunk: (user) => dispatch(updateUserThunk(user)),
  };
};

export default connect(null, mapDispatch)(Checkout);
