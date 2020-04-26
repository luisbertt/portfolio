
import Link from 'next/link'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout>
      <main>
        <h1 className="title">
          Luisbert <span className="title-regular">Seijas</span>
        </h1>

        <p className="description">
          A bunch of mini apps I've built over the years to practice algorithmns and programming in general.
        </p>

        <ul>
          <li><Link href="/credit-card"><a>💳 Credit Card Checker</a></Link></li>
          <li><a href="#">💵 Bill Calculator</a></li>
        </ul>
      </main>

      <style jsx>{`
        main {
          width: 100%;
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 2rem;
        }

        .title-regular {
          font-weight: 300;
        }

        .description {
          width: 500px;
          line-height: 1.5;
          font-size: 1rem;
        }
      `}</style>
    </Layout>
  )
}
