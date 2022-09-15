import React from 'react';
import Link from 'next/link';
import '../styles/MenuMobile.scss';

const MenuMobile = () => {
    return (
        <div className="MenuMobile">
            <ul>
                <li>
                    <Link href="/">CATEGORIES</Link>
                </li>
                <li>
                    <Link href="/">All</Link>
                </li>
                <li>
                    <Link href="/">CLOTHES</Link>
                </li>
                <li>
                    <Link href="/">Electronics</Link>
                </li>
                <li>
                    <Link href="/">Furniture</Link>
                </li>
                <li>
                    <Link href="/">Toys</Link>
                </li>
                <li>
                    <Link href="/">Others</Link>
                </li>
            </ul>
            <ul>
                <li>
                    <Link href="/">My orders</Link>
                </li>
                <li>
                    <Link href="/">My account</Link>
                </li>
            </ul>
            <ul>
                <li>
                    <Link href="/" className="email">
                        mail@mail.com
                    </Link>
                </li>
                <li>
                    <Link href="/" className="sign-out">
                        Sign out
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default MenuMobile;
