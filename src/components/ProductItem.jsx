import React, { useContext } from 'react';
import AppContext from '@context/AppContext';

import addToCartImage from '@icons/bt_add_to_cart.svg';
import addedToCartImage from '@icons/bt_added_to_cart.svg';
import style from '@styles/ProductItem.module.scss';

/* [1] ProductItem component receive a prop called product  */
const ProductItem = ({ product }) => {
    const { state, addToCart } = useContext(AppContext);

    const handleClick = (item) => {
        console.log('in cart:', state.cart.includes(item));
        addToCart(item);
    };
    return (
        <div className={style.ProductItem}>
            {/* [2] Render the product image in this case the first image */}
            <img src={product.images[0]} alt={product.title} />
            <div className={style['product-info']}>
                <div>
                    {/* [3] Render the product title and product price */}
                    <p>${product.price}</p>
                    <p>{product.title}</p>
                </div>
                <figure onClick={() => handleClick(product)}>
                    {state.cart.includes(product)
						? <img className={style.disabled} src={addedToCartImage} alt="added to cart" />
						: <img src={addToCartImage} alt="add to cart" />}
                </figure>
            </div>
        </div>
    );
};

export default ProductItem;
