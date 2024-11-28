import { Tab } from '../../types'
import { Tractor, Trailer } from './trip.types'

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

export const trailers: Trailer[] = [
  { trailerId: 'ABC12345' },
  { trailerId: 'ABC23456' },
]

export const tripTableHeaders: Tab[] = [
  { id: 'task', label: 'Task' },
  { id: 'equipment', label: 'Equipment' },
  { id: 'date', label: 'Date/Time' },
  { id: 'est', label: 'Est Date/Time' },
  { id: 'company', label: 'Company' },
  { id: 'action', label: 'Action' },
]
