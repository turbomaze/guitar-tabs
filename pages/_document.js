import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MainDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <title>anthony's tabs</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
        <body>
          <Main />

          <NextScript />
        </body>
      </Html>
    );
  }
}
