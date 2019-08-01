import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { actAddProductRequest, actGetProductRequest, actUpdateProductRequest } from '../../actions/index';

class ProductActionPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      txtName: "",
      txtPrice: '',
      chkbStatus: '',
    };
  }
  componentDidMount() {
    var { match } = this.props;
    if (match) {
      var id = match.params.id;
      this.props.onGetItem(id);
    }
  }
  componentWillReceiveProps(nextprops){
    
    if(nextprops && nextprops.itemEditing){
      var {itemEditing} = nextprops; 
      this.setState({
        id: itemEditing.id,
        txtName : itemEditing.name,
        txtPrice: itemEditing.price,
        chkbStatus : itemEditing.status,
      }) 
    }
  }
  onChange = (e) => {
    var target = e.target;
    var name = target.name;
    var value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    })
  }

  onSave = (e) => {
    e.preventDefault();
    var { history } = this.props;
    var { id, txtName, txtPrice, chkbStatus } = this.state;
    var product = {
      id: id,
      name: txtName,
      price: txtPrice,
      status: chkbStatus,
    }
    if (id) {
     this.props.onUpdateProduct(product);
     history.goBack();
    } else {
      this.props.onAddProduct(product);
      history.goBack();
    }
  }
  render() {
    var { txtName, txtPrice, chkbStatus } = this.state;
    return (

      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">

        <form onSubmit={this.onSave}>
          <div className="form-group">
            <label >Name of Product</label>
            <input type="text" className="form-control" placeholder="Input field" value={txtName} onChange={this.onChange} name="txtName" />
          </div>
          <div className="form-group">
            <label >Price of Product</label>
            <input type="number" className="form-control" placeholder="Input field" onChange={this.onChange} value={txtPrice} name='txtPrice' />
          </div>
          <div className="form-group">
            <label >Status</label>

            <div className="checkbox">
              <label>
                <input type="checkbox" value=""
                  name='chkbStatus'
                  onChange={this.onChange}
                  value={chkbStatus}
                  checked={chkbStatus} />
                Stocking
               </label>
            </div>

          </div>
          <Link to='/product-list' className="btn btn-warning mr-10">
            Go Back
          </Link>
          <button type="submit" className="btn btn-primary">Submit</button>

        </form>

      </div>
    )
  }

}
const mapStateToProps = state => {
  return {
    itemEditing: state.itemEditing,
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    onAddProduct: (product) => {
      dispatch(actAddProductRequest(product));
    },
    onGetItem: (id) => {
      dispatch(actGetProductRequest(id));
    },
    onUpdateProduct: (product) => {
      dispatch(actUpdateProductRequest(product));
    },
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductActionPage);
