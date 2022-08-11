import Head from 'next/head'
import { AppProvider } from '../data/context/AppContext'
import { AuthProvider } from '../data/context/AuthContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <AuthProvider>
        <>
          <Head>
            <link
              rel="stylesheet"
              href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
              integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
              crossorigin="anonymous"
            />
            <script src="https://unpkg.com/react/umd/react.production.min.js" crossorigin></script>

            <script
              src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
              crossorigin></script>

            <script
              src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
              crossorigin></script>
          </Head>
          <Component {...pageProps} />
        </>
      </AuthProvider>
    </AppProvider>
  )
}

export default MyApp
