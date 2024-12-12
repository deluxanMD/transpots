import { Stack, styled, TableCell, tableCellClasses } from '@mui/material'
import DownArrow from '../../../../../assets/icons/DownArrow.png'
import UpArrow from '../../../../../assets/icons/UpArrow.png'
import Delete from '../../../../../assets/icons/Delete.png'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    color: theme.palette.common.white,
    // padding: '4px 12px',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    // padding: '4px 12px',
  },
}))

const InvoiceEditTableActons = ({ index }: { index: number }) => {
  return (
    <StyledTableCell sx={{ minWidth: 150 }}>
      <Stack spacing={2} direction="row" alignItems="center">
        {index === 0 ? (
          <img src={DownArrow} alt="down arrow" width={40} height={27} />
        ) : (
          <img src={UpArrow} alt="up arrow" width={40} height={27} />
        )}
        <img src={Delete} alt="down arrow" width={30} height={35} />
      </Stack>
    </StyledTableCell>
  )
}

export default InvoiceEditTableActons
