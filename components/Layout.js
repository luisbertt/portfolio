import Head from "next/head"
import Footer from "./Footer"

const Layout = ({ children }) => (
    <div className="container mx-auto my-4">
        <Head>
            <title>Luisbert Seijas</title>
            <link rel="icon" href="/images/favicon.ico" />
            <script
                defer
                data-domain="luisbert.me"
                src="https://plausible.io/js/plausible.js"
            ></script>
        </Head>

        <main className="flex space-x-4">{children}</main>

        <Footer />
    </div>
)

export default Layout
