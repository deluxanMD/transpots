import { Paper, Table, TableContainer } from '@mui/material'
import TripDetailsTableHeaders from './trip-details-table-header/trip-details-table-header'
import TripDetailsTableBody from './trip-details-table-body/trip-details-table-body'
import { useSelector } from 'react-redux'
import { RootState } from '../../../../store'

const TripDetailsTable = () => {
  const rows = useSelector((state: RootState) => state.trips.rows)

  return (
    <TableContainer component={Paper} sx={{ borderRadius: 0 }}>
      <Table aria-label="customized table">
        <TripDetailsTableHeaders />
        {rows.length > 0 && <TripDetailsTableBody />}
      </Table>
    </TableContainer>
  )
}

export default TripDetailsTable
