import React from 'react';
import {connect} from 'react-redux';
import {addProductThunk} from '../store/allProducts';

import './styles/AdminProducts.css';

class AdminAddProduct extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      imageUrl: '',
      description: '',
      scoop_price: 0,
      scoop_quantity: 0,
      pint_price: 0,
      pint_quantity: 0,
      tub_price: 0,
      tub_quantity: 0,
      discount_percentage: 0,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  async handleSubmit(event) {
    event.preventDefault();
    try {
      this.props.addProductThunk(this.state);
    } catch (err) {
      console.log('handlesubmit err', err);
    }
  }

  render() {
    return (
      <form id="addProductform" onSubmit={this.handleSubmit}>
        <h3>Add a Product</h3>
        <label htmlFor="name">Name:</label>
        <input
          name="name"
          type="text"
          onChange={this.handleChange}
          value={this.props.name}
        />
        <label htmlFor="description">Description:</label>
        <input
          name="description"
          type="text"
          onChange={this.handleChange}
          value={this.props.description}
        />
        <label htmlFor="imageUrl">Image URL:</label>
        <input
          name="imageUrl"
          type="text"
          onChange={this.handleChange}
          value={this.props.imageUrl}
        />

        <label htmlFor="discount_percentage">Discount Percentage</label>
        <input
          name="discount_percentage"
          type="text"
          onChange={this.handleChange}
          value={this.props.discount_percentage}
        />
        <h3>Price:</h3>
        <label htmlFor="scoop_price">Scoop:</label>
        <input
          name="scoop_price"
          type="text"
          onChange={this.handleChange}
          value={this.props.scoop_price}
        />
        <label htmlFor="pint_price">Pint:</label>
        <input
          name="pint_price"
          type="text"
          onChange={this.handleChange}
          value={this.props.pint_price}
        />
        <label htmlFor="tub_price">Tub:</label>
        <input
          name="tub_price"
          type="text"
          onChange={this.handleChange}
          value={this.props.tub_price}
        />
        <h3>Quantity:</h3>
        <label htmlFor="scoop_quantity">Scoop:</label>
        <input
          name="scoop_quantity"
          type="text"
          onChange={this.handleChange}
          value={this.props.scoop_quantity}
        />
        <label htmlFor="pint_quantity">Pint:</label>
        <input
          name="pint_quantity"
          type="text"
          onChange={this.handleChange}
          value={this.props.pint_quantity}
        />

        <label htmlFor="tub_quantity">Tub:</label>
        <input
          name="tub_quantity"
          type="text"
          onChange={this.handleChange}
          value={this.props.tub_quantity}
        />

        <button type="submit">Submit</button>
      </form>
    );
  }
}

const mapDispatch = (dispatch) => {
  return {
    addProductThunk: (product) => dispatch(addProductThunk(product)),
  };
};

export default connect(null, mapDispatch)(AdminAddProduct);
