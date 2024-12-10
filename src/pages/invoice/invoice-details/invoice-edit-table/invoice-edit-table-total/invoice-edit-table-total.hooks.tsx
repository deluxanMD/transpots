import { useMemo } from 'react'
import { Line } from '../../../invoice.type'

export const useInvoiceEditTableTotal = (lines: Line[]) => {
  const subtotal = useMemo(
    () =>
      lines.reduce((acc, curr) => {
        console.log(curr)
        return acc + curr.total
      }, 0),
    [lines]
  )

  const tax = subtotal * 0.05

  const total = subtotal + tax

  return { subtotal, tax, total }
}
