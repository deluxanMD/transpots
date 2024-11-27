import { TripDetail } from '../../trip.types'

const createData = (tripDetail: TripDetail) => {
  return { ...tripDetail }
}

export const rows = [
  createData({
    task: 'hook',
    equipment: { equipmentId: 'D12345', equipmentType: 'Tractor' },
    date: '2016-05-25T09:08:34.123+06:00',
    estimateDate: '2016-05-25T09:08:34.123+06:00',
    disabled: true,
    company: {
      companyId: '12345',
      companyName: 'DEF Logistics',
      address: {
        street: '789 Oak Avenue',
        city: 'Sarnia',
        state: 'ON',
      },
    },
  }),
]
