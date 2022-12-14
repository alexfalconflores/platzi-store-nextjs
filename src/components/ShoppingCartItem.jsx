import React, { useContext } from 'react';
import Image from 'next/image';
import AppContext from '@context/AppContext';

import close from '@icons/icon_close.png';
import styles from '@styles/ShoppingCartItem.module.scss';

const ShoppingCartItem = ({ product, index }) => {
    const { removeFromCart } = useContext(AppContext);

    //Enviamos el index por ahora.
    const handleRemove = (item) => {
        removeFromCart(item, index);
    };

    return (
        <div className={styles.ShoppingCartItem}>
            <figure>
                <Image src={product?.images[0]} alt={product?.title} width={70} height={70} />
            </figure>
            <p>{product?.title}</p>
            <p>${product?.price}</p>
            <Image src={close} alt="close" onClick={() => handleRemove(product)} />
        </div>
    );
};

export default ShoppingCartItem;
