import React from 'react'
import { RootState } from '../../../../store'
import { useSelector } from 'react-redux'
import { Paper, Table, TableContainer } from '@mui/material'
import InvoicesTableHeaders from './invoice-table-header/invoice-table-header'
import InvoiceTableBody from './invoice-table-body/invoice-table-body'

const InvoiceTable = () => {
  const rows = useSelector((state: RootState) => state.invoices.rows)

  return (
    <TableContainer component={Paper} sx={{ borderRadius: 0 }}>
      <Table aria-label="invoice table">
        <InvoicesTableHeaders />
        {rows.length > 0 && <InvoiceTableBody />}
      </Table>
    </TableContainer>
  )
}

export default InvoiceTable
