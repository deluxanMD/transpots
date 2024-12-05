import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {
  Company,
  EquipmentType,
  Order,
  Task,
  Tractor,
  Trailer,
  TripDetail,
  TripsError,
} from '../../pages/trip/trip.types'
import {
  addTractorFixture,
  addTrailerDropFixture,
  addTrailerHookFixture,
  ordersFixture,
  tractorsFixture,
  trailersFixture,
} from './trips.fixtures'
import { insertInto } from '../../utils/store'
import {
  didAlreadyExist,
  removeHookAndDrop,
  removeOrderItem,
} from './trips.utils'

export interface TripsState {
  rows: TripDetail[]
  tractors: Tractor[]
  trailers: Trailer[]
  orders: Order[]
  error: TripsError
}

const initialState: TripsState = {
  rows: [],
  tractors: tractorsFixture,
  trailers: trailersFixture,
  orders: ordersFixture,
  error: {
    open: false,
    message: '',
    variant: 'info',
  },
}

export const tripsSlice = createSlice({
  name: 'trip',
  initialState,
  reducers: {
    addTractor: (
      state,
      { payload: { tractorId } }: PayloadAction<{ tractorId: string }>
    ) => {
      const tractor: TripDetail[] = addTractorFixture(tractorId)
      state.rows = tractor
    },
    addTrailer: (
      state,
      { payload: { trailerId } }: PayloadAction<{ trailerId: string }>
    ) => {
      const trailerHook: TripDetail = addTrailerHookFixture(trailerId)
      const trailerDrop: TripDetail = addTrailerDropFixture(trailerId)

      state.rows = insertInto(1, state.rows, trailerHook)
      state.rows = insertInto(2, state.rows, trailerDrop)
    },
    addOrder: (state, { payload: { orders } }: PayloadAction<Order>) => {
      const trailerIndex = state.rows
        .map((row) => row.equipment.equipmentType)
        .indexOf('Trailer')

      if (!didAlreadyExist(state, orders[0])) {
        state.rows = insertInto(trailerIndex + 1, state.rows, orders[0])
      }

      if (!didAlreadyExist(state, orders[1])) {
        state.rows = insertInto(trailerIndex + 2, state.rows, orders[1])
      }

      if (!didAlreadyExist(state, orders[2])) {
        state.rows = insertInto(trailerIndex + 3, state.rows, orders[2])
      }
    },
    addOrderItem: (
      state,
      { payload: { orderItem } }: PayloadAction<{ orderItem: TripDetail }>
    ) => {
      const trailerIndex = state.rows
        .map((row) => row.equipment.equipmentType)
        .indexOf('Trailer')

      state.rows = insertInto(trailerIndex + 1, state.rows, orderItem)
    },
    makeError: (
      state,
      { payload: { error } }: PayloadAction<{ error: TripsError }>
    ) => {
      state.error = error
    },
    clearError: (state) => {
      state.error = {
        open: false,
        message: '',
        variant: 'info',
      }
    },
    closeVehicle: (
      state,
      {
        payload: { id, task, equipmentType },
      }: PayloadAction<{
        id: string
        task: Task
        equipmentType: EquipmentType
      }>
    ) => {
      const hasTrailer = state.rows.some(
        (row) => row.equipment.equipmentType === 'Trailer'
      )

      if (equipmentType === 'Tractor') {
        if (hasTrailer) {
          state.error = {
            open: true,
            message: "You can't remove tractor unless you remove the trailer",
            variant: 'error',
          }
        } else {
          removeHookAndDrop(state, id, task)
        }
      }

      if (equipmentType === 'Trailer') {
        removeHookAndDrop(state, id, task)
      }
    },
    closeOrderItem: (
      state,
      { payload: { orderItemId } }: PayloadAction<{ orderItemId: string }>
    ) => {
      removeOrderItem(state, orderItemId)
    },
    convertToDrop: (
      state,
      { payload: { id } }: PayloadAction<{ id: string }>
    ) => {
      state.rows = state.rows.map((row) =>
        row.equipment.equipmentId === id && row.task === 'delivery'
          ? { ...row, task: 'drop' }
          : row
      )
    },
    updateAddress: (
      state,
      {
        payload: { trip, company },
      }: PayloadAction<{ trip: TripDetail; company: Company }>
    ) => {
      state.rows = state.rows.map((row) =>
        row.task === trip.task ? { ...row, company } : row
      )
    },
  },
})

export const {
  addTractor,
  addTrailer,
  addOrder,
  addOrderItem,
  makeError,
  clearError,
  closeVehicle,
  closeOrderItem,
  convertToDrop,
  updateAddress,
} = tripsSlice.actions

export default tripsSlice.reducer
