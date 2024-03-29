import "../styles/styles.css"
import { ThemeProvider } from "../utils/ThemeContext"

export default function App({ Component, pageProps }) {
    return (
        <ThemeProvider>
            <Component {...pageProps} />
        </ThemeProvider>
    )
}
