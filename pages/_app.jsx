import Navbar from "../components/Navbar"
import "../css/globals.css"

export default function App({Component, pageProps}) {
    return(
        <>
            <Navbar />
            <Component {...pageProps} />
        </>
    )
}