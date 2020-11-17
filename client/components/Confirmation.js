import React, {Component} from 'react';
import {Button, List} from 'semantic-ui-react';

class Confirmation extends Component {
  constructor(props){
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
    const {
      values: {
        firstName,
        lastName,
        email,
        mobile,
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
      },
    } = this.props;
    const {values, handleSubmit} = this.props;
    return (
      <div>
        <h1 className="ui centered">Confirm your Details</h1>
        <p>
          Click Confirm if the following details have been correctly entered
        </p>
        <List>
          <List.Item>
            <List.Content>Address Line 1 {address1}</List.Content>
          </List.Item>
          <List.Item>
            <List.Content>Address Line 2{address2}</List.Content>
          </List.Item>
          <List.Item>
            <List.Content>City{city}</List.Content>
          </List.Item>
          <List.Item>
            <List.Content>Country: {country}</List.Content>
          </List.Item>
          <List.Item>
            <List.Content>Zip: {zip}</List.Content>
          </List.Item>
          <List.Item>
            <List.Content>State/Province: {state_or_province}</List.Content>
          </List.Item>
        </List>



        <Button onClick={this.back}>Back</Button>
        <Button onClick={this.saveAndContinue} type="submit">Confirm</Button>
</div>
    );
  }
}

export default Confirmation;
