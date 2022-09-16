import React, { useState, useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Menu from '@components/Menu';
import ShoppingCart from '@containers/ShoppingCart';
import AppContext from '@context/AppContext';

import menu from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg';
import shoppingCart from '@icons/icon_shopping_cart.svg';
import styles from '@styles/Header.module.scss';

const Header = () => {
    /* [1] Create a state variable called toggle and set it to false. */
    const [toggle, setToggle] = useState(false);
    const [toggleOrders, setToggleOrders] = useState(false);
    /*  Define a context variable called appContext */
    /* Destructuring the appContext */
    /* Rename state with its cart property to cart */
    const {
        state: { cart },
    } = useContext(AppContext);
    /* [2] Create a function called handleToggle that will toggle the state of toggle. */
    const handleToggle = () => {
        setToggle(!toggle);
    };

    return (
        <nav className={styles.nav}>
            <img src={menu.src} alt="menu" className={styles.menu} />
            <div className={styles['navbar-left']}>
                <Link href="/">
                    <Image src={logo} alt="logo" className={styles['nav-logo']} />
                </Link>
                <ul>
                    <li>
                        <Link href="/">All</Link>
                    </li>
                    <li>
                        <Link href="/">Clothes</Link>
                    </li>
                    <li>
                        <Link href="/">Electronics</Link>
                    </li>
                    <li>
                        <Link href="/">Furnitures</Link>
                    </li>
                    <li>
                        <Link href="/">Toys</Link>
                    </li>
                    <li>
                        <Link href="/">Others</Link>
                    </li>
                </ul>
            </div>
            <div className={styles['navbar-right']}>
                <ul>
                    <li className={styles['navbar-email']}>
                        <button onClick={handleToggle}>mail@mail.com</button>
                    </li>
                    <li className={styles['navbar-shopping-cart']}>
                        <button onClick={() => setToggleOrders(!toggleOrders)}>
                            <Image src={shoppingCart} alt="shopping cart" />
                            {cart.length > 0 && <div>{cart.length}</div>}
                        </button>
                    </li>
                </ul>
            </div>
            {/* Menu component is rendered here*/}
            {toggle && <Menu />}
            {toggleOrders && <ShoppingCart />}
        </nav>
    );
};

export default Header;
