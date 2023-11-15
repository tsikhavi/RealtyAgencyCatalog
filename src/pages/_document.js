import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="ru">
      <Head>
      <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
      <link
            href="https://fonts.googleapis.com/css2?family=Font1&family=Font2&display=swap"
            rel="stylesheet"
          />
      </Head >

      <body className=' text-base text-gray-700'>

        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
