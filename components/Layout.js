import Head from "next/head";
import Footer from "./Footer";

const Layout = ({ children }) => (
    <div>
        <Head>
            <title>Luisbert Seijas</title>
        </Head>

        {children}

        <Footer />
    </div>
);

export default Layout;
