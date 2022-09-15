import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <title>React Shop</title>
                    <meta name="description" content="A React Shop" />
                    <script async src="https://www.googletagmanager.com/gtag/js?id=G-85QPNJ353Q"></script>
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-85QPNJ353Q');`,
                        }}
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
