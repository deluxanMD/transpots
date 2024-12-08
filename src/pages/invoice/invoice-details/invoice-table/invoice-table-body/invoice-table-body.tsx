import { styled, TableBody, TableRow } from '@mui/material'
import { useSelector } from 'react-redux'
import { RootState } from '../../../../../store'
import { InvoiceDetail } from '../../../invoice.type'
import InvoiceTableCell from '../invoice-table-cell/invoice-table-cell'
import InvoiceTableDocuments from '../invoice-table-documents/invoice-table-documents'
import InvoiceTableActions from '../invoice-table-actions/invoice-table-actions'
import InvoiceTableCompany from '../invoice-table-company/invoice-table-company'

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(even)': {
    backgroundColor: theme.palette.secondary.light,
  },

  '&:last-child td, &:last-child th': {
    border: 0,
  },
}))

const InvoiceTableBody = () => {
  const rows = useSelector((state: RootState) => state.invoices.rows)
  const tab = useSelector((state: RootState) => state.invoices.tabSelected)

  return (
    <TableBody>
      {rows.map((row: InvoiceDetail, index) => {
        const {
          age,
          amount,
          company,
          invoiceId,
          invoiceLabel,
          invoiceStatus,
          status,
        } = row
        return (
          tab === status && (
            <StyledTableRow key={index}>
              <InvoiceTableCell
                value1={invoiceLabel}
                value2={invoiceId}
                minWidth={150}
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
              />
              {/* <TripDetailsTableAction
              currentRow={row}
              prevRow={rows[index - 1]}
              nextRow={rows[index + 1]}
            /> */}
            </StyledTableRow>
          )
        )
      })}
    </TableBody>
  )
}

export default InvoiceTableBody
