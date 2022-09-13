import React, { useContext } from 'react';
import AppContext from '@context/AppContext';

import close from '@icons/icon_close.png';
import styles from '@styles/OrderItem.module.scss';

const OrderItem = ({ product }) => {
    const { removeFromCart } = useContext(AppContext);

    const handleRemove = (product) => {
        removeFromCart(product);
    };

    return (
        <div className={styles.OrderItem}>
            <figure>
                <img src={product?.images[0]} alt={product?.title} />
                {/* src="https://images.pexels.com/photos/6802843/pexels-photo-6802843.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="bike"  */}
            </figure>
            {/* <p>Bike</p> */}
            <p>{product?.title}</p>
            {/* <p>$ 30.00</p> */}
            <p>${product?.price}</p>
            {/* <img src="./icons/icon_close.png" alt="close" /> */}
            <img className={styles.pointer, styles['more-clickable-area']} src={close}/>
        </div>
    );
};

export default OrderItem;
