export type Trip = {
  tripId: string
  driverName: string
  cusomer: string
  status: 'New' | 'Assigned' | 'Picked up' | 'Delivered' | 'Archived'
}

export type Task = 'hook' | 'pickup' | 'delivery' | 'drop'

export type EquipmentType = 'Tractor' | 'Trailer' | 'Order'

export type Equipment = {
  equipmentId: string
  equipmentType: EquipmentType
  orderItemId?: string
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
  task: Task
  equipment: Equipment
  date: string
  estimateDate: string
  company: Company
}

export type Tractor = {
  tractorId: string
}

export type Trailer = {
  trailerId: string
}

export type Order = {
  orderId: string
  orders: TripDetail[]
}

export type TripsError = {
  open: boolean
  message: string
  variant: 'success' | 'error' | 'info'
}
