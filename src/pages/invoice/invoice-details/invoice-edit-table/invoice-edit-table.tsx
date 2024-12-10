import { Table, TableContainer, Typography, useTheme } from '@mui/material'
import React from 'react'
import InvoiceEditTableHeader from './invoice-edit-table-header/invoice-edit-table-header'
import InvoiceEditTableBody from './invoice-edit-table-body/invoice-edit-table-body'
import { Line } from '../../invoice.type'
import InvoiceEditTableNotes from './invoice-edit-table-notes/invoice-edit-table-notes'
import InvoiceEditTableTotal from './invoice-edit-table-total/invoice-edit-table-total'
import { AddLine, NotesContainer } from './invoice-edit-table.styles'
import { DateTime } from 'luxon'

const InvoiceEditTable = () => {
  const theme = useTheme()
  const id = DateTime.now().toMillis().toString()

  const [lines, setLines] = React.useState<Line[]>([])

  const handleAddLine = () => {
    setLines([
      ...lines,
      {
        description: '',
        lineId: id,
        lineName: '',
        quantity: 1,
        rate: 0,
        taxable: false,
        total: 0,
      },
    ])
  }

  return (
    <>
      <TableContainer
        className="hide-scrollbar"
        sx={{
          bgcolor: 'secondary.light',
          borderTopLeftRadius: '10px',
          borderTopRightRadius: '10px',
        }}
      >
        <Table aria-label="invoice table">
          <InvoiceEditTableHeader />
          <InvoiceEditTableBody lines={lines} setLines={setLines} />
        </Table>
      </TableContainer>

      <NotesContainer theme={theme}>
        <AddLine onClick={handleAddLine}>
          <Typography fontWeight={700} color="primary.main">
            + Add a Line
          </Typography>
        </AddLine>

        <div style={{ margin: '12px', marginTop: 100 }}>
          <InvoiceEditTableTotal lines={lines} />
          <InvoiceEditTableNotes />
        </div>
      </NotesContainer>
    </>
  )
}

export default InvoiceEditTable

// sx={{ height: 'calc(100vh - 640px)' }}
