import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { InvoiceDetail } from '../../pages/invoice/invoice.type'
import { invoicesFixture } from './invoices.fixtures'

export interface InvoiceState {
  rows: InvoiceDetail[]
}

const initialState: InvoiceState = {
  rows: invoicesFixture,
}

export const invoiceSlice = createSlice({
  name: 'invoice',
  initialState,
  reducers: {
    viewInvoice: (
      state,
      { payload: { invoiceId } }: PayloadAction<{ invoiceId: string }>
    ) => {
      console.log(`View invoice ${invoiceId}`)
    },
  },
})

export const { viewInvoice } = invoiceSlice.actions

export default invoiceSlice.reducer
