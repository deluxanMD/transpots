import { Stack, Typography, useTheme } from '@mui/material'
import React, { useMemo } from 'react'
import { Equipment } from '../../equipment.types'
import { ListContainer } from './equipment-selection-list.styles'
import { useDispatch, useSelector } from 'react-redux'
import { selectEquipment } from '../../../../store/equipments/equipments.slice'
import { RootState } from '../../../../store'

type Props = {
  selectedTab: 'tractor' | 'trailer'
}

const ListItem = (equipment: Equipment) => {
  const { id, name, type } = equipment
  const theme = useTheme()
  const dispatch = useDispatch()

  const { selectedEquipment } = useSelector(
    (state: RootState) => state.equipments
  )

  const isSelectedEquipment = useMemo(
    () => id === selectedEquipment.id,
    [selectedEquipment.id, id]
  )

  return (
    <ListContainer
      theme={theme}
      onClick={() => dispatch(selectEquipment({ equipment }))}
      sx={{
        bgcolor: isSelectedEquipment ? 'primary.main' : 'secondary.light',
        color: isSelectedEquipment ? 'common.white' : 'common.black',
      }}
    >
      <Typography fontWeight={700}>{name}</Typography>
      <Typography fontWeight={300} textTransform="capitalize">
        {type}
      </Typography>
    </ListContainer>
  )
}

const EquipmentSelectionList = ({ selectedTab = 'tractor' }: Props) => {
  const { equipments } = useSelector((state: RootState) => state.equipments)

  return (
    <Stack spacing={2} mt={2}>
      {equipments.map(
        (equipment) =>
          equipment.type === selectedTab && (
            <ListItem key={equipment.id} {...equipment} />
          )
      )}
    </Stack>
  )
}

export default EquipmentSelectionList
