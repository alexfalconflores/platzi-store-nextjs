import { useEffect, useState } from "react";

/* [1] Create a custom hook called useGetProducts that takes an api url as a parameter and return products state */
const useGetProducts = (API) => {
    /* [2] Create a state variable called products and set it to [] */
    const [products, setProducts] = useState([]);
    /* [3] Create an arrow function called getProducts that makes a request to the api and
             sends the request to setProducts. */
    const getProducts = async () => {
        const response = await fetch(API);
        const data = await response.json();
        setProducts(data);
    }
    /* [4] Call the getProducts function in the useEffect hook for the initial charge. */
    useEffect(() => {
        getProducts();
    }, []);

    /* [5] Return the products state variable. */
    return products;
};

export default useGetProducts;