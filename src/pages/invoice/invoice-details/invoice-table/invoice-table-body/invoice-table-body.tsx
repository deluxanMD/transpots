import {
  styled,
  TableBody,
  TableCell,
  tableCellClasses,
  TableRow,
} from '@mui/material'
import { useSelector } from 'react-redux'
import { RootState } from '../../../../../store'
import { InvoiceDetail } from '../../../invoice.type'
import InvoiceTableCell from '../invoice-table-cell/invoice-table-cell'
import InvoiceTableCompany from './invoice-table-company/invoice-table-company'
import InvoiceTableDocuments from './invoice-table-documents/invoice-table-documents'
import InvoiceTableActions from './invoice-table-actions/invoice-table-actions'
import InvoiceTableInvoiceId from './invoice-table-invoiceid/invoice-table-invoiceid'
import InvoiceDialog from '../../invoice-dialog/invoice.dialog'
import { useState } from 'react'

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(even)': {
    backgroundColor: theme.palette.secondary.light,
  },

  '&:last-child td, &:last-child th': {
    border: 0,
  },
}))

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    color: theme.palette.common.white,
    // padding: '4px 12px',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    // padding: '4px 12px',
  },
}))

const InvoiceTableBody = () => {
  const [dialogOpen, setDialogOpen] = useState(false)

  const rows = useSelector((state: RootState) => state.invoices.rows)
  const tab = useSelector((state: RootState) => state.invoices.tabSelected)

  const handleDialogOpen = () => {
    setDialogOpen(true)
  }

  const handleDialogClose = () => {
    setDialogOpen(false)
  }

  return (
    <>
      <TableBody>
        {rows.map((row: InvoiceDetail, index) => {
          const { age, amount, company, invoiceId, invoiceStatus, status } = row
          return (
            tab === status && (
              <StyledTableRow key={index}>
                <InvoiceTableInvoiceId
                  handleClick={handleDialogOpen}
                  {...row}
                />
                <InvoiceTableCompany
                  company={company}
                  invoiceStatus={invoiceStatus}
                  minWidth={150}
                />
                <InvoiceTableCell
                  value1={age}
                  value2={'Days'}
                  minWidth={150}
                  {...row}
                />
                <InvoiceTableCell
                  value1={`$${amount.toFixed(2)}`}
                  value2={'CAD'}
                  minWidth={150}
                  {...row}
                />
                <InvoiceTableDocuments align="left" />
                <InvoiceTableActions
                  align="left"
                  disabled={invoiceStatus === 'sent_invoice'}
                  invoiceId={invoiceId}
                />
              </StyledTableRow>
            )
          )
        })}
      </TableBody>
      <InvoiceDialog open={dialogOpen} handleClose={handleDialogClose} />
    </>
  )
}

export default InvoiceTableBody
