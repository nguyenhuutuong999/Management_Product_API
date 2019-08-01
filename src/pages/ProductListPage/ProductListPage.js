import React, { Component } from 'react';
import ProductList from '../../conponents/producList/ProductList';
import ProductItem from '../../conponents/productItem/ProductItem';
import { connect } from 'react-redux'
import {Link} from 'react-router-dom';
import { actFetchProductsRequest, actDeleteProductRequest } from '../../actions';
class ProductListPage extends Component {
  
  componentDidMount() {
    this.props.fetchAllProducts();
  }
  
  onDelete = (id) =>{
    this.props.deleteProducts(id);
  }

render() {
  var { products } = this.props;

  return (
    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">

      <Link to = '/product/add' className="btn btn-info mb-10">Add Product</Link>

      <ProductList>
        {this.showProduct(products)}
      </ProductList>
    </div>

  )
}
showProduct = (products) => {
  var result = null;
  if (products.length > 0) {
    result = products.map((product, index) => {
      return (
        <ProductItem
          key={index}
          product={product}
          index={index}
          onDelete = {this.onDelete}
        />
      )
    });
  }
  return result;
} 
}
const mapStateToProps = state => {
  return {
    products: state.products,
  }
}
const mapDispatchToProps = (dispatch, props) =>{
  return{
    fetchAllProducts : () =>{
      dispatch(actFetchProductsRequest());
    },
    deleteProducts : (id) =>{
      dispatch(actDeleteProductRequest(id));
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);
