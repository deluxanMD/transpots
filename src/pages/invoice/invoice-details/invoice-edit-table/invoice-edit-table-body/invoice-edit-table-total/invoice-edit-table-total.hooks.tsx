import { useMemo } from 'react'
import { Line } from '../../../../invoice.type'

export const useInvoiceEditTableTotal = (
  lines: Line[],
  taxPercentage: number | undefined
) => {
  const subtotal = useMemo(
    () =>
      lines.reduce((acc, curr) => {
        console.log(curr)
        return acc + curr.total
      }, 0),
    [lines]
  )

  const taxedValue = taxPercentage ? subtotal * (taxPercentage / 100) : 0

  const total = subtotal + taxedValue

  return { subtotal, taxedValue, total }
}
