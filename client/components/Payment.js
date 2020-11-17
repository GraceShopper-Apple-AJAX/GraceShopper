import React, {Component} from 'react';
import {Form, Button} from 'semantic-ui-react';

class Payment extends Component {
  constructor(props) {
    super(props);
  }

  saveAndContinue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {values, handleSubmit} = this.props;

    return (
      <Form color="blue" >
        <h1 className="ui centered">Enter Personal Details</h1>
        <Form.Field>
          <label>Credit card type</label>
          <input
            placeholder="Card Type"
            onChange={this.props.handleChange('cc_type')}
            defaultValue={values.cc_type}
          />
        </Form.Field>
        <Form.Field>
          <label>Card number</label>
          <input
            placeholder="Credit Card Number"
            onChange={this.props.handleChange('cc_number_secure')}
            defaultValue={values.cc_number_secure}
          />
        </Form.Field>

        <Button onClick={this.back}>Back</Button>
        <Button onClick={this.saveAndContinue}>Next</Button>
      </Form>
    );
  }
}

export default Payment;
