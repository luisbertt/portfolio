import Head from "next/head"
import Footer from "./Footer"

const Layout = ({ children }) => (
  <div className="container">
    <Head>
      <title>Luisbert Seijas</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    {children}

    <Footer />

    <style jsx>{`
      .container {
        min-height: 100vh;
        max-width: 1080px;
        margin: 0 auto;
        padding: 0 0.5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
    `}</style>
    <style jsx global>{`
      html,
      body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      }

      * {
        box-sizing: border-box;
      }

      ul {
        padding: 0;
        margin: 0;
      }

      li {
        list-style-type: none;
      }
    `}</style>
  </div>
)

export default Layout
