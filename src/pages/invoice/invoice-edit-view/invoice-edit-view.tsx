import { Stack } from '@mui/material'
import InvoiceEditTable from '../invoice-details/invoice-edit-table/invoice-edit-table'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store'
import { useMemo } from 'react'
import { useParams } from 'react-router-dom'
import InvoiceEditViewFrom from './invoice-edit-view-from/invoice-edit-view-from'
import InvoiceEditViewTo from './invoice-edit-view-to/invoice-edit-view-to'
import ActionButtons from '../../../components/action-buttons/action-buttons.component'

const InvoiceEditView = () => {
  const rows = useSelector((state: RootState) => state.invoices.rows)
  const { invoiceId } = useParams()

  const invoice = useMemo(() => {
    return rows.filter((row) => row.invoiceId === invoiceId)[0]
  }, [invoiceId, rows])

  return (
    <Stack sx={{ height: '100%' }}>
      <Stack p={2}>
        <InvoiceEditViewFrom {...invoice} />
        <InvoiceEditViewTo {...invoice} />
      </Stack>

      <div style={{ margin: '12px', height: '100vh' }}>
        <InvoiceEditTable />
      </div>
      <ActionButtons
        firstBtnProps={{
          title: 'Cancel',
          bgColor: 'secondary.main',
        }}
        secondBtnProps={{
          title: 'Save',
          bgColor: 'primary.main',
        }}
      />
    </Stack>
  )
}

export default InvoiceEditView
