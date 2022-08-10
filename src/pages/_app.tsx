import { AppProvider } from '../data/context/AppContext'
import { AuthProvider } from '../data/context/AuthContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </AppProvider>
  )
}

export default MyApp
