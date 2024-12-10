import { Tab } from '../../types'

export const invoiceTabs: Tab[] = [
  { id: 'tobe', label: 'To be Invoiced' },
  { id: 'notpaid', label: 'Not Paid' },
  { id: 'paid', label: 'Paid' },
]

export const invoiceLists: Tab[] = [
  { id: 'all', label: 'All' },
  { id: 'c1', label: 'Customer 1' },
  { id: 'c2', label: 'Customer 2' },
  { id: 'c3', label: 'Customer 3' },
  { id: 'c4', label: 'Customer 4' },
  { id: 'c5', label: 'Customer 5' },
  { id: 'c6', label: 'Customer 6' },
  { id: 'c7', label: 'Customer 7' },
]

export const invoiceChips: Tab[] = [
  { id: 'all', label: 'All' },
  { id: 'u30', label: 'Under 30 Days' },
  { id: 'o30', label: 'Over 30 Days' },
  { id: 'o45', label: 'Over 45 Days' },
  { id: 'o60', label: 'Over 60 Days' },
  { id: 'o90', label: 'Over 90 Days' },
]

export const invoiceTableHeaders: Tab[] = [
  { id: 'invoice', label: 'Invoice#' },
  { id: 'company', label: 'Company' },
  { id: 'aging', label: 'Aging' },
  { id: 'amount', label: 'Amount' },
  { id: 'documents', label: 'Documents' },
  { id: 'action', label: 'Action' },
]

export const invoiceEditTableHeaders: Tab[] = [
  { id: 'lineName', label: 'Line Name' },
  { id: 'description', label: 'Description' },
  { id: 'rate', label: 'Rate' },
  { id: 'qty', label: 'Qty' },
  { id: 'lineTotal', label: 'Line Total' },
  { id: 'tax', label: 'Tax' },
  { id: 'action', label: 'Action' },
]
