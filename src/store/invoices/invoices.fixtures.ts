import { InvoiceDetail } from '../../pages/invoice/invoice.type'

const makeNewInvoice = (
  invoiceLabel: string,
  invoiceId: string,
  invoiceStatus:
    | 'sent_eft'
    | 'sent_cheque'
    | 'sent_invoice'
    | 'not_sent_invoice',
  status: 'tobe_invoiced' | 'not_paid' | 'paid'
) => ({
  invoiceLabel,
  invoiceId,
  company: 'ABC Logistics',
  invoiceStatus,
  age: 30,
  amount: 575.5,
  status,
  billing: {
    from: {
      company: 'Apotex Transports Inc',
      email: 'billing@apotex.com',
    },
    to: {
      company: 'Excel Transportation',
    },
    invoiceDate: 'Sep 28, 2024',
    dueDate: 'Oct 26, 2024',
    loadId: 'LOAD0001',
    // amount: {
    //   lines: [
    //     {
    //       lineId: 'LINE01',
    //       lineName: 'Base Rate',
    //       description: 'Ajax to Scarborough',
    //       rate: 1100,
    //       quantity: 2,
    //     },
    //     {
    //       lineId: 'LINE02',
    //       lineName: 'Waiting Time',
    //       description: 'At Shipper',
    //       rate: 100,
    //       quantity: 2,
    //     },
    //     {
    //       lineId: 'LINE03',
    //       lineName: 'Extra',
    //       description: 'Extra',
    //       rate: 100,
    //       quantity: 1,
    //     },
    //   ],
    // },
  },
})

export const invoicesFixture: InvoiceDetail[] = [
  makeNewInvoice('INV0001', '1234', 'sent_invoice', 'tobe_invoiced'),
  makeNewInvoice('INV0002', '2345', 'not_sent_invoice', 'tobe_invoiced'),
  makeNewInvoice('INV0003', '3456', 'sent_eft', 'not_paid'),
  makeNewInvoice('INV0004', '4567', 'sent_cheque', 'not_paid'),
  makeNewInvoice('INV0005', '5678', 'sent_invoice', 'not_paid'),
]
