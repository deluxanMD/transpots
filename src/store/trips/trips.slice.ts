import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {
  EquipmentType,
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
  tractorsFixture,
  trailersFixture,
} from './trips.fixtures'
import { insertInto } from '../../utils/store'
import { removeHookAndDrop } from './trips.utils'

export interface TripsState {
  rows: TripDetail[]
  tractors: Tractor[]
  trailers: Trailer[]
  error: TripsError
}

const initialState: TripsState = {
  rows: [],
  tractors: tractorsFixture,
  trailers: trailersFixture,
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
  },
})

export const { addTractor, addTrailer, makeError, clearError, closeVehicle } =
  tripsSlice.actions

export default tripsSlice.reducer
