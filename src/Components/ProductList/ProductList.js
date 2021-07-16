import React, { Component } from 'react';

class ProductList extends Component {
    render() {
        return (
            <div className="card mt-12">
                <div className="card-header">
                    <h3 className="card-title">Danh Sách Sản Phẩm</h3>
                </div>
                <div className="card-body">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>Mã Sản Phẩm</th>
                                <th>Tên Sản Phẩm</th>
                                <th>Giá</th>
                                <th>Trạng Thái</th>
                                <th>Hàng Động</th>
                            </tr>
                        </thead>
                        <tbody>
                           {this.props.children}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }

}

export default ProductList;
