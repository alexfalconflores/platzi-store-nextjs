import React, { useContext } from 'react';
import ShoppingCartItem from '../components/ShoppingCartItem';
import AppContext from '@context/AppContext';
import '@styles/ShoppingCart.scss';

import arrow from '@icons/flechita.svg';

const ShoppingCart = () => {
    const { state: { cart } } = useContext(AppContext);

    const sumTotal = () => {
        const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
        const sum = cart.reduce(reducer, 0);
        return sum;
    }

    return (
        <aside className="ShoppingCart">
            <div className="title-container">
                <img src={arrow} alt="arrow" />
                <p className="title">Shopping cart</p>
            </div>
            <div className="my-order-content">
                {/* {cart.map((product) => <ShoppingCartItem key={`orderItem-${product.id}`} product={product} />)} */}
                {cart.map((product, index) => <ShoppingCartItem key={index} index={index} product={product} />)}
                <div className='order-container'>
                    <div className="order">
                        <p>
                            <span>Total</span>
                        </p>
                        <p>${sumTotal()}</p>
                    </div>
                    <button className="primary-button">
                        Checkout
                    </button>
                </div>
            </div>
        </aside>
    );
}

export default ShoppingCart;