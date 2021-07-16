import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProductItem extends Component {

    onDelete = (id) => {
        if(confirm('Are you sure you want to delete ?')) { //eslint-disable-line
            this.props.onDelete(id);
        }
    }

    render() {
        var { product, index } = this.props;
        var statusName = product.status === true ? 'Còn Hàng' : 'Hết Hàng'
        var statusClass = product.status === true ? 'warning' : 'secondary'
        return (
            <tr>
                <th>{index + 1}</th>
                <th>{product.id}</th>
                <th>{product.name}</th>
                <th>{product.price}</th>
                <th>
                    <span className={`badge badge-${statusClass}`}>
                        {statusName}
                    </span>
                </th>
                <th>
                    <Link to={`product/${product.id}/edit`} type="button" className="btn btn-success mr-12"

                    >Sửa
                    </Link>
                    <button type="button" className="btn btn-danger"
                        onClick={ () => this.onDelete(product.id)}
                    >Xóa
                    </button>
                </th>
            </tr>
        );
    }

}

export default ProductItem;
