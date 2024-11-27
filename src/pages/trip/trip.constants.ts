import { Tab } from '../../types'
import { Tractor, Trip } from './trip.types'

export const tripTabs: Tab[] = [
  {
    id: 'tractor',
    label: 'Tractor',
  },
  {
    id: 'trailer',
    label: 'Trailer',
  },
  {
    id: 'order',
    label: 'Order',
  },
]

export const tractors: Tractor[] = [
  { tractorId: '12345' },
  { tractorId: '23456' },
]

export const activeTripTabs: Trip[] = [
  {
    tripId: '12345',
    cusomer: 'ABC Company',
    driverName: 'Shri Paramsothy',
    status: 'Picked up',
  },
  {
    tripId: '23456',
    cusomer: 'ABC Company',
    driverName: 'David Cho',
    status: 'Picked up',
  },
  {
    tripId: '34567',
    cusomer: 'ABC Company',
    driverName: 'Rajan Bala',
    status: 'Picked up',
  },
]

export const tripTableHeaders: Tab[] = [
  { id: 'task', label: 'Task' },
  { id: 'equipment', label: 'Equipment' },
  { id: 'date', label: 'Date/Time' },
  { id: 'est', label: 'Est Date/Time' },
  { id: 'company', label: 'Company' },
]
