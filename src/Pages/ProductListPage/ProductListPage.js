import React, { Component } from 'react';
import { connect } from 'react-redux'
import ProductList from '../../Components/ProductList/ProductList';
import ProductItem from '../../Components/ProductItem/ProductItem';
import { Link } from 'react-router-dom';
import { actDeleteProductRequest, actFetchProductsRequest } from '../../Actions/index';

class ProductListPage extends Component {
    
    componentDidMount() {
        this.props.fetchAllProducts();
    }


    onDelete = (id) => {
       this.props.onDeleteProduct(id)
    }

    render() {
        var { products } = this.props;

        return (
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <Link to="/product/add" type="button" className="btn btn-info">Thêm Sản Phẩm</Link>
                <ProductList >
                    {this.showProduct(products)}
                </ProductList>
            </div>
        );
    }

    showProduct(products) {
        var result = null;
        if (products.length > 0) {
            result = products.map((product, index) => {
                return (
                    <ProductItem
                        key={index}
                        product={product}
                        index={index}
                        onDelete={this.onDelete}
                    />
                )
            })
        }
        return result
    }

}

const mapStateToProps = state => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllProducts: () => {
            dispatch(actFetchProductsRequest())
        },
        onDeleteProduct: (id) => {
            dispatch(actDeleteProductRequest(id))
        }
        
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);
