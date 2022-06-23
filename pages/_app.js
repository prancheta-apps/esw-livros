import '../styles/globals.css'
import Head from 'next/head'

export default function LivrosdeTi({ Component, pageProps }) {
  return (
    <>
     <Head>
        <title>Livros de Tecnologia</title>
        <meta name="description" content="Compre Livros de Tecnologia. Impulsione seu aprendizado." />
        <link rel="icon" href="/logo.png" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}