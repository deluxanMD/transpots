import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { InvoiceDetail } from '../../pages/invoice/invoice.type'
import { invoicesFixture } from './invoices.fixtures'

export interface InvoiceState {
  rows: InvoiceDetail[]
  tabSelected: 'tobe_invoiced' | 'not_paid' | 'paid'
}

const initialState: InvoiceState = {
  rows: invoicesFixture,
  tabSelected: 'tobe_invoiced',
}

export const invoiceSlice = createSlice({
  name: 'invoice',
  initialState,
  reducers: {
    selectInvoiceTab: (
      state,
      { payload: { index } }: PayloadAction<{ index: number }>
    ) => {
      switch (index) {
        case 0:
          state.tabSelected = 'tobe_invoiced'
          break
        case 1:
          state.tabSelected = 'not_paid'
          break
        case 2:
          state.tabSelected = 'paid'
          break
      }
    },
    viewInvoice: (
      state,
      { payload: { invoiceId } }: PayloadAction<{ invoiceId: string }>
    ) => {
      console.log(`View invoice ${invoiceId}`)
    },
    editInvoice: (
      state,
      { payload: { invoiceId } }: PayloadAction<{ invoiceId: string }>
    ) => {
      console.log(invoiceId)
    },
  },
})

export const { viewInvoice, selectInvoiceTab, editInvoice } =
  invoiceSlice.actions

export default invoiceSlice.reducer
