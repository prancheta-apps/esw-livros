import '../styles/globals.css'
import Head from 'next/head'
export default function LivrosdeTi({ Component, pageProps }) {
  return (
    <>
     <Head>
        <title>Livros de Engenharia de Software</title>
        <meta name="description" content="Compre livros de Engenharia de Software. Impulsione seu aprendizado." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Sávio Santos" />
        <meta name="keywords" content="livros, engenharia de software, software, esw" />
        <meta name="rating" content="General" />
        <meta name="distribution" content="Global" />
        <meta name="identifier-url" content="https://eswlivros.com.br/" />
        <meta name="copyright" content="https://eswlivros.com.br" />
        <meta name="robots" content="index,follow" />
        <link rel="icon" href="/logo.png" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}