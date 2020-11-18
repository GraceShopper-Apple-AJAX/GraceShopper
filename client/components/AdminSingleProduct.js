import React from 'react';
import {connect} from 'react-redux';
import {fetchSingleProduct, updateProductThunk} from '../store/singleProduct';
import './styles/AdminProducts.css';

class AdminSingleProduct extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      formStatus: false,
      updateName: '',
      updateImageUrl: '',
      updateDescription: '',
      updateDiscount_Percentage: '',
      updateScoopP: '',
      updatePintP: '',
      updateTubP: '',
      updateScoopQ: '',
      updatePintQ: '',
      updateTubQ: '',
    };
    this.toggleFormStatus = this.toggleFormStatus.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    try {
      this.props.fetchSingleProduct(this.props.match.params.productId);
    } catch (error) {
      console.log(error);
    }
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  async handleSubmit(event) {
    event.preventDefault();
    const product = {
      name: event.target.updateName.value,
      description: event.target.updateDescription.value,
      imageUrl: event.target.updateImageUrl.value,
      discount_percentage: event.target.updateDiscount_Percentage.value,
      scoop_price: event.target.updateScoopP.value,
      pint_price: event.target.updatePintP.value,
      tub_price: event.target.updateTubP.value,
      scoop_quantity: event.target.updateScoopQ.value,
      pint_quantity: event.target.updatePintQ.value,
      tub_quantity: event.target.updateTubQ.value,
      id: this.props.product.id,
    };
    await this.props.updateProductThunk(product);
  }

  async updateProduct(productId) {
    try {
      await this.props.updateProductThunk(productId);
      this.props.fetchProducts();
    } catch (err) {
      console.error(err);
    }
  }
  toggleFormStatus() {
    this.setState({formStatus: !this.state.formStatus});
  }

  render() {
    const product = this.props.product;

    return (
      <div>
        <div className="single-product">
          <button onClick={this.toggleFormStatus} value={product.id}>
            Edit Product
          </button>
          {this.state.formStatus ? (
            <form onSubmit={this.handleSubmit} id="editform">
              <div id="editInput">
                <label htmlFor="updateName">Name:</label>
                <input
                  name="updateName"
                  type="text"
                  onChange={this.handleChange}
                  value={this.props.updateName}
                />
                <label htmlFor="updateDescription">Description:</label>
                <input
                  name="updateDescription"
                  type="text"
                  onChange={this.handleChange}
                  value={this.props.updateDescription}
                />
                <label htmlFor="updateImageUrl">Image URL:</label>
                <input
                  name="updateImageUrl"
                  type="text"
                  onChange={this.handleChange}
                  value={this.props.updateImageUrl}
                />

                <label htmlFor="updateDiscount_Percentage">
                  Discount Percentage
                </label>
                <input
                  name="updateDiscount_Percentage"
                  type="text"
                  onChange={this.handleChange}
                  value={this.props.updateDiscount_Percentage}
                />
                <h3>Price:</h3>
                <label htmlFor="updateScoopP">Scoop:</label>
                <input
                  name="updateScoopP"
                  type="text"
                  onChange={this.handleChange}
                  value={this.props.updateScoopP}
                />
                <label htmlFor="updatePintP">Pint:</label>
                <input
                  name="updatePintP"
                  type="text"
                  onChange={this.handleChange}
                  value={this.props.updatePintP}
                />
                <label htmlFor="updateTubP">Tub:</label>
                <input
                  name="updateTubP"
                  type="text"
                  onChange={this.handleChange}
                  value={this.props.updateTubP}
                />
                <h3>Quantity:</h3>
                <label htmlFor="updateScoopQ">Scoop:</label>
                <input
                  name="updateScoopQ"
                  type="text"
                  onChange={this.handleChange}
                  value={this.props.updateScoopQ}
                />
                <label htmlFor="updatePintQ">Pint:</label>
                <input
                  name="updatePintQ"
                  type="text"
                  onChange={this.handleChange}
                  value={this.props.updatePintQ}
                />

                <label htmlFor="updateTubQ">Tub:</label>
                <input
                  name="updateTubQ"
                  type="text"
                  onChange={this.handleChange}
                  value={this.props.updateTubQ}
                />
              </div>
              <button type="submit" id="editsubmit">
                Submit
              </button>
            </form>
          ) : null}
          <h1>{product.name}</h1>
          <div>{product.description}</div>
          <div>Product Id: {product.id}</div>
          <div>
            <img src={product.imageUrl} id="single-product-image"></img>
          </div>
          <div id="item-info">
            <table>
              <tbody>
                <tr>
                  <th>Size</th>
                  <th>Price</th>
                  <th>Quantity</th>
                </tr>
                <tr>
                  <td>Scoop</td>
                  <td>{product.scoop_price}</td>
                  <td>{product.scoop_quantity}</td>
                </tr>
                <tr>
                  <td>Pint</td>
                  <td>{product.pint_price}</td>
                  <td>{product.pint_quantity}</td>
                </tr>
                <tr>
                  <td>Tub</td>
                  <td>{product.tub_price}</td>
                  <td>{product.tub_quantity}</td>
                </tr>
              </tbody>
            </table>

            {/* <div>
        <label>Edit Item Page:</label>
        <input type="textarea"
          name="textValue"
          onChange={this.handleChange}
        />
        </div>

        <label>
          Feature Product?
        <input
            name="featureProduct"
            type="checkbox"
           ></input>
        </label> */}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    product: state.singleProduct,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSingleProduct: (productId) => dispatch(fetchSingleProduct(productId)),
    updateProductThunk: (productId) => dispatch(updateProductThunk(productId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminSingleProduct);
