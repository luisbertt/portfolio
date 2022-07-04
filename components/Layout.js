import Head from "next/head"
import Footer from "./Footer"

const Layout = ({ children }) => (
    <div className="container mx-auto my-4">
        <Head>
            <title>Luisbert Seijas</title>
            <link rel="icon" href="/images/favicon.ico" />
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.14.0/devicon.min.css"
            />
        </Head>

        <main className="flex space-x-4">{children}</main>

        <Footer />
    </div>
)

export default Layout
