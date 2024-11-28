import {
  EquipmentType,
  Task,
  Tractor,
  Trailer,
  TripDetail,
} from '../../pages/trip/trip.types'

export const tractorsFixture: Tractor[] = [
  { tractorId: 'D12345' },
  { tractorId: 'D23456' },
]

export const trailersFixture: Trailer[] = [
  { trailerId: 'ABC12345' },
  { trailerId: 'ABC23456' },
]

const makeNewItem = (
  id: string,
  task: Task,
  equipmentType: EquipmentType
): TripDetail => ({
  task,
  equipment: { equipmentId: id, equipmentType },
  date: '2016-05-25T09:08:34.123+06:00',
  estimateDate: '2016-05-25T09:08:34.123+06:00',
  company: {
    companyId: '12345',
    companyName: 'DEF Logistics',
    address: {
      street: '789 Oak Avenue',
      city: 'Sarnia',
      state: 'ON',
    },
  },
})

export const addTractorFixture = (tractorId: string): TripDetail[] => [
  makeNewItem(tractorId, 'hook', 'Tractor'),
  makeNewItem(tractorId, 'drop', 'Tractor'),
]

export const addTrailerHookFixture = (trailerId: string): TripDetail =>
  makeNewItem(trailerId, 'hook', 'Trailer')

export const addTrailerDropFixture = (trailerId: string): TripDetail =>
  makeNewItem(trailerId, 'drop', 'Trailer')
