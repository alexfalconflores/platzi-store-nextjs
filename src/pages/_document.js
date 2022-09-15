import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <title>React Shop</title>
                    <meta name="description" content="A React Shop" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
