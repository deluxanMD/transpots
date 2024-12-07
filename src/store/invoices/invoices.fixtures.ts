import { InvoiceDetail } from '../../pages/invoice/invoice.type'

const makeNewInvoice = (
  invoiceLabel: string,
  invoiceId: string,
  invoiceStatus: 'sent_eft' | 'sent_cheque' | 'sent_invoice',
  status: 'tobe_invoiced' | 'not_paid' | 'paid'
) => ({
  invoiceLabel,
  invoiceId,
  company: 'ABC Logistics',
  invoiceStatus,
  age: 30,
  amount: 575.5,
  status,
})

export const invoicesFixture: InvoiceDetail[] = [
  makeNewInvoice('INV0001', '1234', 'sent_invoice', 'tobe_invoiced'),
  makeNewInvoice('INV0002', '2345', 'sent_invoice', 'tobe_invoiced'),
  makeNewInvoice('INV0003', '3456', 'sent_eft', 'not_paid'),
  makeNewInvoice('INV0004', '4567', 'sent_cheque', 'not_paid'),
  makeNewInvoice('INV0005', '5678', 'sent_invoice', 'not_paid'),
]
