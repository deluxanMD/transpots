import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Equipment } from '../../pages/equipment/equipment.types'
import { equipments } from '../../pages/equipment/equipment.constants'

export interface EquipmentState {
  equipments: Equipment[]
  selectedEquipment: Equipment
  selectedTab: 'tractor' | 'trailer'
}

const initialState: EquipmentState = {
  equipments,
  selectedEquipment: {
    id: '',
    name: '',
    type: 'tractor',
  },
  selectedTab: 'tractor',
}

export const equipmentSlice = createSlice({
  name: 'equipment',
  initialState,
  reducers: {
    selectTab: (
      state,
      { payload: { tab } }: PayloadAction<{ tab: 'tractor' | 'trailer' }>
    ) => {
      state.selectedTab = tab
    },
    selectEquipment: (
      state,
      { payload: { equipment } }: PayloadAction<{ equipment: Equipment }>
    ) => {
      state.selectedEquipment = equipment
    },
    clearSelection: (state) => {
      state.selectedEquipment = {
        id: '',
        name: '',
        type: 'tractor',
      }
    },
    deleteEquipment: (
      state,
      { payload: { id } }: PayloadAction<{ id: string }>
    ) => {
      state.equipments = state.equipments.filter(
        (equipment) => equipment.id !== id
      )
      state.selectedEquipment = {
        id: '',
        name: '',
        type: 'tractor',
      }
    },
  },
})

export const { selectTab, selectEquipment, clearSelection, deleteEquipment } =
  equipmentSlice.actions

export default equipmentSlice.reducer
