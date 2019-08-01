import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class ProductItem extends Component {
  onDelete = (id) =>{
    if(confirm("Are You Sure To Delete ??")){ // eslint-disable-line
      this.props.onDelete(id);
    }
  }

  render() {
    var {product, index} = this.props;
    var statusName = product.status ? "Stocking" : "Out Of Stock";
    var statusClass = product.status ? "primary" : "warning";
    return (
      <tr>
      <td>{index + 1}</td>
      <td>{product.id}</td>
      <td>{product.name}</td>
      <td>{product.price}</td>
      <td>

        <button type="button" className={`label label-${statusClass}`}>{statusName}</button>

      </td>
      <td>

        <Link to = {`product/${product.id}/edit`} className="btn btn-success">Edit</Link>
        <button type="button" className="btn btn-danger ml-10" onClick = {() =>{this.onDelete(product.id)}}>Delete</button>

      </td>
    </tr>


    )
  }
}
export default ProductItem;
