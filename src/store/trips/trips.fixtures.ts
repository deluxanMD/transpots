import {
  EquipmentType,
  Order,
  Task,
  Tractor,
  Trailer,
  TripDetail,
} from '../../pages/trip/trip.types'

const makeNewItem = (
  id: string,
  task: Task,
  equipmentType: EquipmentType,
  orderItemId?: string
): TripDetail => ({
  task,
  equipment: { equipmentId: id, equipmentType, orderItemId },
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

export const tractorsFixture: Tractor[] = [
  { tractorId: 'D12345' },
  { tractorId: 'D23456' },
]

export const trailersFixture: Trailer[] = [
  { trailerId: 'ABC12345' },
  { trailerId: 'ABC23456' },
]

export const ordersFixture: Order[] = [
  {
    orderId: 'ORD1234',
    orders: [
      makeNewItem('ORD1234', 'pickup', 'Order', 'ORD12341'),
      makeNewItem('ORD1234', 'pickup', 'Order', 'ORD12342'),
      makeNewItem('ORD1234', 'delivery', 'Order', 'ORD12343'),
    ],
  },
  {
    orderId: 'ORD2345',
    orders: [
      makeNewItem('ORD2345', 'pickup', 'Order', 'ORD23451'),
      makeNewItem('ORD2345', 'pickup', 'Order', 'ORD23452'),
      makeNewItem('ORD2345', 'delivery', 'Order', 'ORD23453'),
    ],
  },
]

export const addTractorFixture = (tractorId: string): TripDetail[] => [
  makeNewItem(tractorId, 'hook', 'Tractor'),
  makeNewItem(tractorId, 'drop', 'Tractor'),
]

export const addTrailerHookFixture = (trailerId: string): TripDetail =>
  makeNewItem(trailerId, 'hook', 'Trailer')

export const addTrailerDropFixture = (trailerId: string): TripDetail =>
  makeNewItem(trailerId, 'drop', 'Trailer')
