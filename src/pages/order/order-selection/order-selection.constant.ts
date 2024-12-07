import { Tab } from '../../../types'

export type Order = {
  orderId: string
  loadId: string
  customer: string
  status: 'New' | 'Assigned' | 'Picked up' | 'Delivered'
}

export const newOrders: Order[] = [
  {
    orderId: '12345',
    loadId: 'LOAD01',
    customer: 'Deluxan',
    status: 'New',
  },
]

export const activeOrders: Order[] = [
  {
    orderId: '1',
    loadId: 'LOAD01',
    customer: 'Deluxan',
    status: 'Assigned',
  },
  {
    orderId: '2',
    loadId: 'LOAD02',
    customer: 'John',
    status: 'Picked up',
  },
  {
    orderId: '3',
    loadId: 'LOAD03',
    customer: 'Deluxan',
    status: 'Assigned',
  },
  {
    orderId: '4',
    loadId: 'LOAD04',
    customer: 'John',
    status: 'Picked up',
  },
  {
    orderId: '5',
    loadId: 'LOAD05',
    customer: 'Deluxan',
    status: 'Assigned',
  },
  {
    orderId: '6',
    loadId: 'LOAD06',
    customer: 'John',
    status: 'Picked up',
  },
  {
    orderId: '7',
    loadId: 'LOAD07',
    customer: 'Deluxan',
    status: 'Assigned',
  },
  {
    orderId: '8',
    loadId: 'LOAD08',
    customer: 'John',
    status: 'Picked up',
  },
  {
    orderId: '9',
    loadId: 'LOAD09',
    customer: 'Deluxan',
    status: 'Assigned',
  },
  {
    orderId: '10',
    loadId: 'LOAD10',
    customer: 'John',
    status: 'Picked up',
  },
  {
    orderId: '11',
    loadId: 'LOAD11',
    customer: 'Deluxan',
    status: 'Assigned',
  },
  {
    orderId: '12',
    loadId: 'LOAD12',
    customer: 'John',
    status: 'Picked up',
  },
  {
    orderId: '13',
    loadId: 'LOAD13',
    customer: 'Deluxan',
    status: 'Assigned',
  },
  {
    orderId: '14',
    loadId: 'LOAD14',
    customer: 'John',
    status: 'Picked up',
  },
  {
    orderId: '15',
    loadId: 'LOAD15',
    customer: 'Deluxan',
    status: 'Assigned',
  },
  {
    orderId: '16',
    loadId: 'LOAD16',
    customer: 'John',
    status: 'Picked up',
  },
  {
    orderId: '17',
    loadId: 'LOAD17',
    customer: 'Deluxan',
    status: 'Assigned',
  },
  {
    orderId: '18',
    loadId: 'LOAD18',
    customer: 'John',
    status: 'Picked up',
  },
]

export const tabs: Tab[] = [
  {
    id: 'new',
    label: 'New Order',
  },
  {
    id: 'active',
    label: 'Active Order',
  },
  {
    id: 'archive',
    label: 'Archive Order',
  },
]
