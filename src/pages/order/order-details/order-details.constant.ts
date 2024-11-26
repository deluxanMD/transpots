export type OrderDetailsTab = {
  id: string
  label: string
}

export const orderDetailsTabs: OrderDetailsTab[] = [
  { id: 'customer', label: 'Customer' },
  { id: 'rate', label: 'Rate' },
  { id: 'pickup', label: 'Pickup' },
  { id: 'delivery1', label: 'Delivery 1' },
  { id: 'delivery2', label: 'Delivery 2' },
  { id: 'notes', label: 'Notes' },
  { id: 'map', label: 'Map' },
]

export type OrderTracking = {
  status: 'Order Created' | 'Assigned' | 'Pickup' | 'Delivery'
  description?: string
  date?: string
  done: boolean
  isLast?: boolean
}

export const orderTrackings: OrderTracking[] = [
  { status: 'Order Created', date: 'Nov 4, 2025 9:00', done: true },
  { status: 'Assigned', date: 'Nov 4, 2025 10:00', done: true },
  { status: 'Pickup', description: 'IBM', done: true },
  { status: 'Delivery', description: 'IBM', done: false },
  { status: 'Delivery', description: 'Apple', done: false },
]
