import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <meta name='theme-color' content='#000000'/>
        <link rel="icon" href="/favicon.ico" />
        <link key={2} rel="preconnect" href="https://fonts.googleapis.com"/>
        <link key={1} rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;700&display=swap" rel="stylesheet"/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}