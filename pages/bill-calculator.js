import Layout from "../components/Layout"
import Link from "next/link"
import { useState, useEffect } from "react"
import useBills from "../hooks/useBills"

const BillCalculator = () => {
  const [isValid, setIsValid] = useState(false)
  const [quantityInput, setQuantityInput] = useState("")

  const { quantities, setQuantities, bills, deleteQuantity } = useBills()

  useEffect(() => {
    isValidInput(quantityInput)
  }, [quantityInput])

  function isValidInput(input) {
    input == "" || input == null || isNaN(input)
      ? setIsValid(false)
      : setIsValid(true)
  }

  return (
    <Layout>
      <Link href="/">
        <a>Back</a>
      </Link>
      <main>
        <h1>💵 Bill Calculator</h1>
        <form
          onSubmit={e => {
            e.preventDefault()
            if (isValid) {
              setQuantities(quantities => [...quantities, quantityInput])
            }
            setQuantityInput("")
          }}
        >
          <input
            type="text"
            value={quantityInput}
            placeholder="Enter quantity..."
            onChange={e => setQuantityInput(e.target.value)}
          />
          <button type="submit">Add</button>
        </form>
        <div className="grid">
          <div className="box left">
            <h3>Quantities</h3>
            <ul>
              {quantities &&
                quantities.map((quantity, i) => (
                  <li
                    key={i + quantity}
                    onClick={() => deleteQuantity(quantity)}
                  >
                    ${quantity}
                  </li>
                ))}
            </ul>
          </div>
          <div className="box right">
            <h3>Bills</h3>
            <ul>
              {Object.keys(bills)
                .reverse()
                .map(bill => (
                  <li key={bill}>
                    ${bill} .............. {bills[bill]}
                  </li>
                ))}
            </ul>
          </div>
        </div>
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
          align-items: center;
        }

        h1 {
          margin-bottom: 0.5em;
        }

        input {
          vertical-align: middle;
          width: 400px;
          height: 50px;
          padding: 5px 10px;
          font-size: 1.25rem;
          border: 3px solid #eaeaea;
          border-radius: 5px;
        }

        button {
          vertical-align: middle;
          margin-left: 0.5em;
          height: 50px;
          font-size: 1.25rem;
          color: #006aff;
          font-weight: 600;
          border: 3px solid #006aff;
          border-radius: 5px;
        }

        .grid {
          margin: 2rem 0;
          display: flex;
          flex-direction: row;
        }

        .box {
          margin: 1rem;
          padding: 1rem;
          min-height: 200px;
          width: 200px;
          border: 3px solid #eaeaea;
          border-radius: 3px;
          font-size: 1.25rem;
          line-height: 1.25rem;
        }

        li {
          margin-bottom: 0.25rem;
        }

        .right {
          height: 200px;
        }

        h3 {
          margin: 0;
          text-align: center;
          font-size: 1.25rem;
        }

        .left li:hover {
          color: red;
          opacity: 0.75;
          text-decoration: line-through;
        }

        .right li {
          text-align: right;
        }
      `}</style>
    </Layout>
  )
}

export default BillCalculator
