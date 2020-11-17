import React, {Component} from 'react';
import {Form, Button} from 'semantic-ui-react';
import './styles/Checkout.css';

class Details extends Component {
  constructor(props) {
    super(props);
  }

  saveAndContinue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const {values} = this.props;
    return (
      <Form className="form-group" onSubmit={this.handleSubmit}>
        <h3>Enter Details</h3>
        <Form.Field>
          <label>Address Line 1</label>
          <input
            placeholder="Address Line 1"
            onChange={this.props.handleChange('address1')}
            defaultValue={values.address1}
            className="input-control"
          />
        </Form.Field>
        <Form.Field>
          <label>Address Line 2</label>
          <input
            placeholder="Address Line 2"
            onChange={this.props.handleChange('address2')}
            defaultValue={values.address2}
            className="input-control"
          />
        </Form.Field>
        <Form.Field>
          <label>country</label>
          <input
            placeholder="City"
            onChange={this.props.handleChange('city')}
            defaultValue={values.city}
            className="input-control"
          />
        </Form.Field>
        <Form.Field>
          <label>City</label>
          <input
            placeholder="Country"
            onChange={this.props.handleChange('country')}
            defaultValue={values.country}
            className="input-control"
          />
        </Form.Field>
        <Form.Field>
          <label>Zip</label>
          <input
            placeholder="Zip code"
            onChange={this.props.handleChange('zip')}
            defaultValue={values.zip}
            className="input-control"
          />
        </Form.Field>
        <Form.Field>
          <label>State/Province</label>
          <input
            placeholder="State/Province"
            onChange={this.props.handleChange('state_or_province')}
            defaultValue={values.state_or_province}
            className="input-control"
          />
        </Form.Field>
        <Button onClick={this.saveAndContinue}>Next</Button>
      </Form>
    );
  }
}

export default Details;
