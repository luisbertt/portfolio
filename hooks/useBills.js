import { useState, useEffect } from 'react'

const useBills = () => {
  const [quantities, setQuantities] = useState([])
  const [bills, setBills] = useState({})
  const billDenominations = [100, 50, 20, 10, 5, 1]
  const initialBillsState = {100: 0, 50: 0, 20: 0, 10: 0, 5: 0, 1: 0}

  useEffect(() => {
    const newBills = Object.assign({}, initialBillsState)
    
    quantities.forEach(qty => {
      billDenominations.forEach(denomination => {
        if (qty / denomination > 0) 
          newBills[denomination] += Math.floor(qty / denomination)
  
        qty %= denomination
      })
    })

    setBills(newBills)
  }, [quantities])

  const deleteQuantity = quantity => {
    setQuantities(quantities.filter(qty => qty !== quantity))
  }

  return { quantities, setQuantities, bills, deleteQuantity }
}

export default useBills