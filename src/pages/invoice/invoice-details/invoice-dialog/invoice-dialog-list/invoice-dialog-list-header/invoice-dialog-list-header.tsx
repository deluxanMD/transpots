import { Stack, Typography } from '@mui/material'
import LeftDoubleArrow from '../../../../../../assets/icons/LeftDoubleArrow.png'
import RightDoubleArrow from '../../../../../../assets/icons/RightDoubleArrow.png'
import LeftArrow from '../../../../../../assets/icons/LeftArrow.png'
import RightArrow from '../../../../../../assets/icons/RightArrow.png'
import CloseIcon from '../../../../../../assets/icons/CloseGrey.png'
import {
  Arrow,
  Close,
  Container,
  DoubleArrow,
} from './invoice-dialog-list-header.styles'
import { InvoiceDialogProps } from '../../invoice.dialog'

const InvoiceDialogListHeader = ({
  handleClose,
}: Omit<InvoiceDialogProps, 'open'>) => {
  return (
    <Container>
      <Stack direction="row" alignItems="center" spacing={2}>
        <DoubleArrow src={LeftDoubleArrow} alt="left double arrow" />
        <Arrow src={LeftArrow} alt="left double arrow" />
        <Typography fontWeight={700} color="secondary.main">
          INV0001
        </Typography>
        <Arrow src={RightArrow} alt="left double arrow" />
        <DoubleArrow src={RightDoubleArrow} alt="left double arrow" />
      </Stack>
      <Close src={CloseIcon} alt="close" onClick={handleClose} />
    </Container>
  )
}

export default InvoiceDialogListHeader
