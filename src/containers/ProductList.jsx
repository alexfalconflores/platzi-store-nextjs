import React from 'react';
import ProductItem from '../components/ProductItem';

import useGetProducts from '@hooks/useGetProducts';

const API = 'https://api.escuelajs.co/api/v1/products';

import '../styles/ProductList.scss';

const ProductList = () => {
	/* [1] Call the custom hook called useGetProducts */
	const products = useGetProducts(API);

	return (
		<section className="ProductList-container">
			<div className="ProductList">
				{/* [2] Loop through the products array and render a ProductItem component for each product. */}
				{products.map(product => {
					{/* React needs a key for each element that is rendered inside a map */ }
					{/* [3] Pass the product as a prop to the ProductItem component. */ }
					return <ProductItem key={product.id} product={product} />
				})}
			</div>
		</section>
	);
}

export default ProductList;