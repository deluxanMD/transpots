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
}
