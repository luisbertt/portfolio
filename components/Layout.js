import Head from "next/head"
import { useContext } from "react"
import { ThemeContext } from "../utils/ThemeContext"
import Footer from "./Footer"

const Layout = ({ children }) => {
    const { darkMode } = useContext(ThemeContext)

    return (
        <div className={darkMode ? "bg-black text-white" : "bg-white text-black"}>
            <div className="flex justify-center h-screen py-10">
                <Head>
                    <title>Luisbert Seijas</title>
                    <link rel="icon" href="/images/favicon.ico" />
                    <link
                        rel="stylesheet"
                        href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.14.0/devicon.min.css"
                    />
                </Head>

                <main>{children}</main>

                <Footer />
            </div>
        </div>
    )
}

export default Layout
