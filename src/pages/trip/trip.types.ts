export type Trip = {
  tripId: string
  driverName: string
  cusomer: string
  status: 'New' | 'Assigned' | 'Picked up' | 'Delivered' | 'Archived'
}

export type Equipment = {
  equipmentId: string
  equipmentType: 'Trailer' | 'Tractor' | 'Order'
}

export type Address = {
  street: string
  city: string
  state: string
}

export type Company = {
  companyId: string
  companyName: string
  address: Address
}

export type TripDetail = {
  task: 'hook' | 'pickup' | 'delivery' | 'drop'
  equipment: Equipment
  date: string
  estimateDate: string
  company: Company
  disabled?: boolean
}

export type Tractor = {
  tractorId: string
}
