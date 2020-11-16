import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

export class Checkout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return     <div className="page-wrap">
    <div className="component-wrap">
      </div></div>;
  }
}

const mapState = (state) => {
  return {};
};

const mapDispatch = (dispatch) => {
  return {};
};

export default withRouter(connect(mapState, mapDispatch)(Checkout));
