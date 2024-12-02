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
    orderId: '12345',
    loadId: 'LOAD01',
    customer: 'Deluxan',
    status: 'Assigned',
  },
  {
    orderId: '23456',
    loadId: 'LOAD02',
    customer: 'John',
    status: 'Picked up',
  },
  {
    orderId: '12345',
    loadId: 'LOAD01',
    customer: 'Deluxan',
    status: 'Assigned',
  },
  {
    orderId: '23456',
    loadId: 'LOAD02',
    customer: 'John',
    status: 'Picked up',
  },
  {
    orderId: '12345',
    loadId: 'LOAD01',
    customer: 'Deluxan',
    status: 'Assigned',
  },
  {
    orderId: '23456',
    loadId: 'LOAD02',
    customer: 'John',
    status: 'Picked up',
  },
  {
    orderId: '12345',
    loadId: 'LOAD01',
    customer: 'Deluxan',
    status: 'Assigned',
  },
  {
    orderId: '23456',
    loadId: 'LOAD02',
    customer: 'John',
    status: 'Picked up',
  },
  {
    orderId: '12345',
    loadId: 'LOAD01',
    customer: 'Deluxan',
    status: 'Assigned',
  },
  {
    orderId: '23456',
    loadId: 'LOAD02',
    customer: 'John',
    status: 'Picked up',
  },
  {
    orderId: '12345',
    loadId: 'LOAD01',
    customer: 'Deluxan',
    status: 'Assigned',
  },
  {
    orderId: '23456',
    loadId: 'LOAD02',
    customer: 'John',
    status: 'Picked up',
  },
  {
    orderId: '12345',
    loadId: 'LOAD01',
    customer: 'Deluxan',
    status: 'Assigned',
  },
  {
    orderId: '23456',
    loadId: 'LOAD02',
    customer: 'John',
    status: 'Picked up',
  },
  {
    orderId: '12345',
    loadId: 'LOAD01',
    customer: 'Deluxan',
    status: 'Assigned',
  },
  {
    orderId: '23456',
    loadId: 'LOAD02',
    customer: 'John',
    status: 'Picked up',
  },
  {
    orderId: '12345',
    loadId: 'LOAD01',
    customer: 'Deluxan',
    status: 'Assigned',
  },
  {
    orderId: '23456',
    loadId: 'LOAD02',
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
