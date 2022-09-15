import React, { useContext } from 'react';
import Image from 'next/image';
import AppContext from '@context/AppContext';

import addToCartImage from '@icons/bt_add_to_cart.svg';
import addedToCartImage from '@icons/bt_added_to_cart.svg';
import styles from '@styles/ProductItem.module.scss';

/* [1] ProductItem component receive a prop called product  */
const ProductItem = ({ product }) => {
    const { state, addToCart } = useContext(AppContext);

    const handleClick = (item) => {
        console.log('in cart:', state.cart.includes(item));
        addToCart(item);
    };
    return (
        <div className={styles.ProductItem}>
            {/* [2] Render the product image in this case the first image */}
            <Image className={styles['ProductItem-img']} src={"/${product?.images[0]}"} alt={product.title} width={240} height={240} />
            <div className={styles['product-info']}>
                <div>
                    {/* [3] Render the product title and product price */}
                    <p>${product?.price}</p>
                    <p>{product?.title}</p>
                </div>
                <figure onClick={() => handleClick(product)}>
                    {state.cart.includes(product) ? <Image className={styles.disabled} src={addedToCartImage} alt="added to cart" /> : <Image src={addToCartImage} alt="add to cart" />}
                </figure>
            </div>
        </div>
    );
};

export default ProductItem;
