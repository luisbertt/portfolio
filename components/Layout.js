import Head from "next/head"
import Footer from "./Footer"

const Layout = ({ children }) => (
    <div className="container">
        <Head>
            <title>Luisbert Seijas</title>
            <script
                defer
                data-domain="luisbert.me"
                src="https://plausible.io/js/plausible.js"
            ></script>
        </Head>

        <main>{children}</main>

        <Footer />
    </div>
)

export default Layout
