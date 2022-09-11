import '../styles/globals.css';
import AppContext from '@context/AppContext';
import useInitialState from '@hooks/useInitialState';

function MyApp({ Component, pageProps }) {
  const initialState = useInitialState(); // <=== const { state, addToCart } = useInitialState();
  return (
    // [1] Create a context provider with the initial state
    <AppContext.Provider value={initialState}>
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}

export default MyApp;
