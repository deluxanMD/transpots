import React from 'react'
import TripDetailsTableCell from '../trip-details-table-cell/trip-details-table-cell'
import { Task, TripDetail } from '../../trip.types'
import SelectField from '../../../../components/select-field/select-field.component'

type TripDetailsTaskProps = {
  task: Task
  row: TripDetail
}

const TaskName = ({ task }: Omit<TripDetailsTaskProps, 'row'>) => (
  <>
    {task === 'delivery' ? (
      <SelectField options={['Delivery', 'Drop']} label="Delivery" hideLabel />
    ) : (
      task
    )}
  </>
)

const TripDetailsTask = ({ task, row }: TripDetailsTaskProps) => {
  return (
    <TripDetailsTableCell
      value1={<TaskName task={task} />}
      textTransform="capitalize"
      minWidth={200}
      {...row}
    />
  )
}

export default TripDetailsTask
