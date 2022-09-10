import { useState } from "react";

const initialState = {
    cart: [],
}

const useInitialState = () => {
    const [state, setState] = useState(initialState);
    const addToCart = (payload) => {
        setState({
            ...state,
            cart: [...state.cart, payload]
        });
    };

    const removeFromCart = (payload, indexPayload) => {
        setState({
            ...state,
            // cart: [...state.cart.filter((items, index) => items.id !== payload.id)]
            cart: [...state.cart.filter((items, index) => index !== indexPayload)]
        });
    }

    return {
        state,
        addToCart,
        removeFromCart
    }
}

export default useInitialState;
