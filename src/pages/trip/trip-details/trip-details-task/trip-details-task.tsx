import React, { useState } from 'react'
import TripDetailsTableCell from '../trip-details-table-cell/trip-details-table-cell'
import { Task, TripDetail } from '../../trip.types'
import SelectField from '../../../../components/select-field/select-field.component'
import { useDispatch } from 'react-redux'
import { SelectChangeEvent } from '@mui/material'
import { convertToDrop } from '../../../../store/trips/trips.slice'

type TripDetailsTaskProps = {
  task: Task
  row: TripDetail
}

const TaskName = ({ task, row }: TripDetailsTaskProps) => {
  const dispatch = useDispatch()
  const [value, setValue] = useState('')

  const handleChange = (event: SelectChangeEvent<any>) => {
    if (event.target.value === 'Delivery') {
      setValue(event.target.value as string)
    } else if (event.target.value === 'Drop') {
      dispatch(convertToDrop({ id: row.equipment.equipmentId }))
    }
  }

  return (
    <>
      {task === 'delivery' ? (
        <SelectField
          options={['Delivery', 'Drop']}
          label="Delivery"
          hideLabel
          value={value === '' ? 'Delivery' : value}
          onChange={(e) => handleChange(e)}
        />
      ) : (
        task
      )}
    </>
  )
}

const TripDetailsTask = ({ task, row }: TripDetailsTaskProps) => {
  return (
    <TripDetailsTableCell
      value1={<TaskName task={task} row={row} />}
      textTransform="capitalize"
      minWidth={200}
      {...row}
    />
  )
}

export default TripDetailsTask
