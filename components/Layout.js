import Head from "next/head"
import Footer from "./Footer"

const Layout = ({ children }) => (
    <div style={{ width: "100%", maxWidth: "39rem", margin: "4rem auto" }}>
        <Head>
            <title>Luisbert Seijas</title>
        </Head>

        <main>{children}</main>

        <Footer />
    </div>
)

export default Layout
