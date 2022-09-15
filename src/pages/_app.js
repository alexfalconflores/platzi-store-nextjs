import Script from 'next/script';
import Header from '@components/Header';
import AppContext from '@context/AppContext';
import useInitialState from '@hooks/useInitialState';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
    const initialState = useInitialState(); // <=== const { state, addToCart } = useInitialState();
    return (
        // [1] Create a context provider with the initial state
        <AppContext.Provider value={initialState}>
            <Script async src="https://www.googletagmanager.com/gtag/js?id=G-85QPNJ353Q" />
            <Script id="google-analytics" strategy="afterInteractive">
                {`window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-85QPNJ353Q');
                `}
            </Script>
            <Header />
            <Component {...pageProps} />
        </AppContext.Provider>
    );
}

export default MyApp;
