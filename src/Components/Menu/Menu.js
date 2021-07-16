import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

const menus = [
    {
        name: 'Trang Chủ',
        to: '/',
        exact: true,
    },
    {
        name: ' Quản Lí Sản Phẩm',
        to: '/product-list',
        exact: false,
    }
]

const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
    return (
        <Route
            path={to}
            exact={activeOnlyWhenExact}
            children={({match}) => {
                var active = match ? 'active' : ''
                return (
                    <li className={`nav-item ${active}`}>
                        <Link to={to} className="nav-link">
                            {label}
                        </Link>
                    </li>
                )
            }}
        />
    )
}

class Menu extends Component {
    render() {
        return (
            <div className="navbar navbar-expand navbar-light bg-light mb-30">
                <a className="navbar-brand">CALL API</a>
                <ul className="nav navbar-nav">
                    {this.showMenus(menus)}
                </ul>
            </div>
        );
    }

    showMenus = (menus) => {
        var result = null;
        if(menus.length > 0) {
            result = menus.map((menu, index) => {
                return(
                    <MenuLink
                    key={index}
                    label={menu.name}
                    to={menu.to}
                    activeOnlyWhenExact={menu.exact}
                    />
                )
            })
        }
        return result
    }

}

export default Menu;
