import React, {Component} from 'react';
import {Form, Button} from 'semantic-ui-react';
import StripeCheckout from 'react-stripe-checkout';

class Payment extends React.Component {
  onToken = (token, addresses) => {};

  saveAndContinue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    return (
      <StripeCheckout
        amount={900}
        billingAddress
        description="Sugar Shack"
        image="https://cdn.vox-cdn.com/thumbor/ilgObBdqZ27E-Ozyc-Cr7CEdoVs=/0x0:2000x1200/1200x800/filters:focal(654x276:974x596)/cdn.vox-cdn.com/uploads/chorus_image/image/64824148/Cone_on_Cone_2.0.jpg"
        locale="auto"
        name="Sugar Shack"
        stripeKey="pk_test_51Hoe2ZHmMAEDSKHEfIyqTlWOod5liaSmREXvgs7Fs9y7FMpGy5XaiV71UtOB7AWJ4dhBvgKnsMg0nHlbzMlTYCV900a9xYsuGD"
        token={this.onToken}
        zipCode
        label="Pay with 💳"
      />
    );
  }
}

export default Payment;
