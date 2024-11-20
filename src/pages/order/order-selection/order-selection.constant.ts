export type Order = {
  orderId: string
  loadId: string
  customer: string
  status: 'Assigned' | 'Picked up' | 'Delivered'
}

export type Tab = {
  id: string
  label: string
  // orders: Order[]
}

export const orders: Order[] = [
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