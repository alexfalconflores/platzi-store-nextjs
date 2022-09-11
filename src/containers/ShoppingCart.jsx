import React, { useContext } from 'react';
import Image from 'next/image';
import ShoppingCartItem from '@components/ShoppingCartItem';
import AppContext from '@context/AppContext';

import arrow from '@icons/flechita.svg';
import styles from '@styles/ShoppingCart.module.scss';

const ShoppingCart = () => {
    const { state: { cart } } = useContext(AppContext);

    const sumTotal = () => {
        const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
        const sum = cart.reduce(reducer, 0);
        return sum;
    }

    return (
        <aside className={styles.ShoppingCart}>
            <div className={styles['title-container']}>
                <Image src={arrow} alt="arrow" />
                <p className={styles.title}>Shopping cart</p>
            </div>
            <div className={styles['my-order-content']}>
                {/* {cart.map((product) => <ShoppingCartItem key={`orderItem-${product.id}`} product={product} />)} */}
                {cart.map((product, index) => <ShoppingCartItem key={index} index={index} product={product} />)}
                <div className={styles['order-container']}>
                    <div className={styles.order}>
                        <p>
                            <span>Total</span>
                        </p>
                        <p>${sumTotal()}</p>
                    </div>
                    <button className={styles['primary-button']}>
                        Checkout
                    </button>
                </div>
            </div>
        </aside>
    );
}

export default ShoppingCart;