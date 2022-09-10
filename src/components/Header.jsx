import React, { useState, useContext } from 'react';
import '@styles/Header.scss';
import Menu from '@components/Menu';
import ShoppingCart from '@containers/ShoppingCart';
import AppContext from '@context/AppContext';
import menu from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg';
import shoppingCart from '@icons/icon_shopping_cart.svg';

const Header = () => {
    /* [1] Create a state variable called toggle and set it to false. */
    const [toggle, setToggle] = useState(false);
    const [toggleOrders, setToggleOrders] = useState(false);
    /*  Define a context variable called appContext */
    /* Destructuring the appContext */
    /* Rename state with its cart property to cart */
    const { state: { cart } } = useContext(AppContext);
    /* [2] Create a function called handleToggle that will toggle the state of toggle. */
    const handleToggle = () => {
        setToggle(!toggle);
    }

    return (
        <nav>
            <img src={menu} alt="menu" className="menu" />
            <div className="navbar-left">
                <img src={logo} alt="logo" className="nav-logo" />
                <ul>
                    <li><a href="/">All</a></li>
                    <li><a href="/">Clothes</a></li>
                    <li><a href="/">Electronics</a></li>
                    <li><a href="/">Furnitures</a></li>
                    <li><a href="/">Toys</a></li>
                    <li><a href="/">Others</a></li>
                </ul>
            </div>
            <div className="navbar-right">
                <ul>
                    <li className="navbar-email" onClick={handleToggle}>
                        mail@mail.com
                    </li>
                    <li className="navbar-shopping-cart" onClick={() => setToggleOrders(!toggleOrders)}>
                        <img src={shoppingCart} alt="shopping cart" />
                        {cart.length > 0 && <div>{cart.length}</div>}
                    </li>
                </ul>
            </div>
            {/* Menu component is rendered here*/}
            {toggle && <Menu />}
            {toggleOrders && <ShoppingCart />}
        </nav>
    );
}

export default Header;