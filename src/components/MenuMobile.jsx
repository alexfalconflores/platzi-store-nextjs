import React from 'react';
import '../styles/MenuMobile.scss';

const MenuMobile = () => {
    return (
        <div className="MenuMobile">
            <ul>
                <li><a href="/">CATEGORIES</a></li>
                <li><a href="/">All</a></li>
                <li><a href="/">CLOTHES</a></li>
                <li><a href="/">Electronics</a></li>
                <li><a href="/">Furnitures</a></li>
                <li><a href="/">Toys</a></li>
                <li><a href="/">Others</a></li>
            </ul>
            <ul>
                <li><a href="/">My orders</a></li>
                <li><a href="/">My account</a></li>
            </ul>
            <ul>
                <li><a href="/" className="email">mail@mail.com</a></li>
                <li><a href="/" className="sign-out">Sign out</a></li>
            </ul>
        </div>
    );
}

export default MenuMobile;