import Head from "next/head"
import Footer from "./Footer"

const Layout = ({ children }) => (
    <div className="container">
        <Head>
            <title>Luisbert Seijas</title>
        </Head>

        <main>{children}</main>

        <Footer />
    </div>
)

export default Layout
