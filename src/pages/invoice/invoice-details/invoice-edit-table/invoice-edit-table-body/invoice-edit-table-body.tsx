import { styled, TableBody, TableRow } from '@mui/material'
import InvoiceEditTableCell from '../invoice-edit-table-cell/invoice-edit-table-cell'
import { Line } from '../../../invoice.type'
import InvoiceEditTableTax from '../invoice-edit-table-tax/invoice-edit-table-tax'
import { ChangeEvent, Dispatch, SetStateAction } from 'react'
import InvoiceEditTableActons from '../invoice-edit-table-actions/invoice-edit-table-actions'

type InvoiceEditTableBodyProps = {
  lines: Line[]
  setLines: Dispatch<SetStateAction<Line[]>>
}

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(even)': {
    backgroundColor: theme.palette.secondary.light,
  },

  'td, th': { border: 0 },
}))

const InvoiceEditTableBody = ({
  lines,
  setLines,
}: InvoiceEditTableBodyProps) => {
  const handleTextIput = (
    event: ChangeEvent<HTMLInputElement>,
    type: 'lineName' | 'description' | 'rate' | 'quantity',
    line: Line
  ) => {
    const inputValue = event.target.value

    setLines((prevLines) =>
      prevLines.map((prevLine) =>
        prevLine.lineId === line.lineId
          ? {
              ...prevLine,
              [type]: inputValue,
            }
          : prevLine
      )
    )
  }

  const updateTotal = (
    event: ChangeEvent<HTMLInputElement>,
    type: 'rate' | 'quantity',
    line: Line
  ) => {
    const inputValue = parseFloat(event.target.value)

    setLines((prevLines) =>
      prevLines.map((prevLine) =>
        prevLine.lineId === line.lineId
          ? {
              ...prevLine,
              total:
                type === 'rate'
                  ? inputValue * line.quantity
                  : line.rate * inputValue,
            }
          : prevLine
      )
    )
  }

  const handleChange = (
    event: ChangeEvent<HTMLInputElement>,
    type: 'lineName' | 'description' | 'rate' | 'quantity',
    line: Line
  ) => {
    switch (type) {
      case 'lineName':
        handleTextIput(event, 'lineName', line)
        break
      case 'description':
        handleTextIput(event, 'description', line)
        break
      case 'rate':
        handleTextIput(event, 'rate', line)
        updateTotal(event, 'rate', line)
        break
      case 'quantity':
        handleTextIput(event, 'quantity', line)
        updateTotal(event, 'quantity', line)
        break
      // case 'total':
      //   setLines([...lines, { ...line, total: parseFloat(event.target.value) }])
      //   break
    }
  }

  return (
    <TableBody>
      {lines.map((line, index) => (
        <StyledTableRow key={line.lineId}>
          <InvoiceEditTableCell
            value={line.lineName}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              handleChange(event, 'lineName', line)
            }
          />
          <InvoiceEditTableCell
            value={line.description}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              handleChange(event, 'description', line)
            }
          />
          <InvoiceEditTableCell
            value={line.rate}
            type="number"
            currencyFormat
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              handleChange(event, 'rate', line)
            }
          />
          <InvoiceEditTableCell
            value={line.quantity}
            type="number"
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              handleChange(event, 'quantity', line)
            }
          />
          <InvoiceEditTableCell
            value={line.total}
            type="number"
            currencyFormat
            disabled
          />
          <InvoiceEditTableTax checked={line.taxable} />
          <InvoiceEditTableActons index={index} />
        </StyledTableRow>
      ))}
    </TableBody>
  )
}

export default InvoiceEditTableBody
