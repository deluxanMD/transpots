import { Tab } from '../../types'
import { Equipment } from './equipment.types'

export const equipmentTabs: Tab[] = [
  { id: 'tractor', label: 'Tractor' },
  { id: 'trailer', label: 'Trailer' },
]

export const equipments: Equipment[] = [
  { id: '1', type: 'tractor', name: 'TRAC0001' },
  { id: '2', type: 'tractor', name: 'TRAC0002' },
  { id: '3', type: 'trailer', name: 'TRAI0001' },
  { id: '4', type: 'trailer', name: 'TRAI0002' },
  { id: '5', type: 'trailer', name: 'TRAI0003' },
]

export const equipmentDetailTabs: Tab[] = [
  { id: 'registration', label: 'Registration' },
  { id: 'insurance', label: 'Insurance' },
  { id: 'safety', label: 'Safety' },
  { id: 'others', label: 'Others' },
]
