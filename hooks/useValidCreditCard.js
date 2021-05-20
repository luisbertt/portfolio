import { useState, useEffect } from "react"

const useValidCreditCard = () => {
  const [cardNumber, setCardNumber] = useState("")
  const [isValid, setIsValid] = useState(false)
  const [creditCardCompany, setCreditCardCompany] = useState("")
  const [isEmpty, setIsEmpty] = useState(true)

  useEffect(() => {
    cardNumber == "" ? setIsEmpty(true) : setIsEmpty(false)

    isValidCreditCardNumber(cardNumber) ? setIsValid(true) : setIsValid(false)

    setCreditCardCompany(findCreditCardCompany(cardNumber))
  }, [cardNumber])

  function isValidCreditCardNumber(number) {
    if (number == "" || number == null || isNaN(number)) return false

    let unevens_sum = 0,
      evens_sum = 0,
      numDigits,
      digitsArray,
      i,
      j = 1

    digitsArray = number.toString().split("").map(Number)
    numDigits = digitsArray.length

    if (numDigits < 13 || numDigits > 16) return false

    for (i = numDigits - 1; i >= 0; i--) {
      if (j % 2 == 1) {
        unevens_sum += digitsArray[i]
      } else {
        if (digitsArray[i] * 2 > 9) {
          evens_sum += (digitsArray[i] * 2) % 10
          evens_sum += 1
        } else {
          evens_sum += digitsArray[i] * 2
        }
      }
      j++
    }

    return (unevens_sum + evens_sum) % 10 == 0 ? true : false
  }

  function findCreditCardCompany(number) {
    let firstTwoDigits = number.toString().substring(0, 2)
    let numDigits = number.toString().length

    if (numDigits == 15 && (firstTwoDigits == 34 || firstTwoDigits == 37))
      return "amex"

    if (numDigits == 16 && firstTwoDigits > 50 && firstTwoDigits < 56)
      return "mastercard"

    if ((numDigits == 13 || numDigits == 16) && firstTwoDigits[0] == 4)
      return "visa"

    if (numDigits == 16 && firstTwoDigits[0] == 6) return "discover"

    return "other"
  }

  return { isValid, isEmpty, creditCardCompany, setCardNumber }
}

export default useValidCreditCard
