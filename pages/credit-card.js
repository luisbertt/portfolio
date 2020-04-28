import Layout from "../components/Layout"
import Link from "next/link"
import useValidCreditCard from "../hooks/useValidCreditCard"

const CreditCard = () => {
  const {
    isValid,
    isEmpty,
    creditCardCompany,
    setCardNumber,
  } = useValidCreditCard()

  return (
    <Layout>
      <Link href="/">
        <a>Back</a>
      </Link>
      <main>
        <h1 className="title">💳 Credit Card Checker</h1>
        <input
          type="text"
          style={{
            backgroundImage: `url(./${creditCardCompany}.png)`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "5px",
            backgroundSize: "48px 30px",
          }}
          className={isEmpty ? "" : isValid ? "valid" : "invalid"}
          onChange={e => setCardNumber(e.target.value)}
        />
      </main>

      <style jsx>{`
        a {
          margin-top: 2em;
          align-self: flex-start;
        }

        main {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          margin-bottom: 10em;
        }

        h1 {
          margin-bottom: 0.5em;
        }

        input {
          width: 400px;
          height: 50px;
          padding: 0 60px;
          font-size: 1.5rem;
          border: 3px solid #eaeaea;
          border-radius: 5px;
          text-align: center;
        }

        input.valid {
          border: 3px solid green;
        }

        input.invalid {
          border: 3px solid red;
        }
      `}</style>
    </Layout>
  )
}
export default CreditCard
