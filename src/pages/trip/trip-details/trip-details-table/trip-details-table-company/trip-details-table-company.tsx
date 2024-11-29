import { Company } from '../../../trip.types'
import { formatAddress } from '../../../trip.utils'
import Edit from '../../../../../assets/icons/Edit.png'
import {
  Stack,
  styled,
  TableCell,
  tableCellClasses,
  Typography,
} from '@mui/material'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    color: theme.palette.common.white,
    fontSize: 18,
    // padding: '4px 12px',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 18,
    // padding: '4px 12px',
  },
}))

const TripDetailsTableCompany = (company: Company) => {
  return (
    <StyledTableCell sx={{ minWidth: 260 }}>
      <Stack direction="row" spacing={1}>
        <img src={Edit} alt="Edit Icon" width={46} height={46} />
        <Stack>
          <Typography
            sx={{
              color: 'InfoText',
              fontWeight: 700,
            }}
          >
            {company.companyName}
          </Typography>
          <Typography
            sx={{
              color: 'InfoText',
              fontWeight: 'normal',
            }}
          >
            {formatAddress(company.address)}
          </Typography>
        </Stack>
      </Stack>
    </StyledTableCell>
  )
}

export default TripDetailsTableCompany
