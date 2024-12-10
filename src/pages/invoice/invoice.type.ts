type Billing = {
  from: {
    company: string
    email: string
  }
  to: {
    company: string
  }
  invoiceDate: string
  dueDate: string
  loadId: string
}

export type Line = {
  lineId: string
  lineName: string
  description: string
  rate: number
  quantity: number
  total: number
  taxable: boolean
}

export type InvoiceDetail = {
  invoiceLabel: string
  invoiceId: string
  company: string
  invoiceStatus:
    | 'sent_eft'
    | 'sent_cheque'
    | 'sent_invoice'
    | 'not_sent_invoice'
  status: 'tobe_invoiced' | 'not_paid' | 'paid'
  age: number
  amount: number
  billing: Billing
}
