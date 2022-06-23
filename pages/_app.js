import '../styles/globals.css'
import Head from 'next/head'

export default function LivrosdeTi({ Component, pageProps }) {
  return (
    <>
     <Head>
        <title>Livros de Engenharia de Software</title>
        <meta name="description" content="Compre livros de Engenharia de Software. Impulsione seu aprendizado." />
        <link rel="icon" href="/logo.png" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}