import Navbar from "../components/Navbar"
import { AuthProvider } from "../components/Providers"
import "../css/globals.css"

export default function App({Component, pageProps}) {
    return(
        <>
        <AuthProvider>
            <Navbar />
            <Component {...pageProps} />
        </AuthProvider>
        </>
    )
}