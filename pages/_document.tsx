import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            rel='preload'
            href='https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Poppins:wght@400;600&family=Lora:wght@400;700&display=swap'
            as='style'
          />
          <link
            rel='preload'
            href='https://fonts.googleapis.com/css2?family=Geist:wght@100..900&display=swap'
            as='style'
          />
          <link
            rel='preload'
            href='https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap'
            as='style'
          />
          <link
            rel='preload'
            href='https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900&display=optional'
            as='style'
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
