import { Dialog, DialogProps, useTheme } from '@mui/material'
import {
  CloseIcon,
  LCDialogContent,
  LCDialogLink,
  LCDialogText,
  LCDialogTitle,
} from './load-confirmation-dialog.styles'
import Close from '../../assets/icons/Close.png'
import { useNavigate } from 'react-router-dom'

type LCSProps = {
  handleClose: () => void
} & DialogProps

const LoadConfirmationSuccessDialog = ({ open, handleClose }: LCSProps) => {
  const theme = useTheme()
  const navigate = useNavigate()

  const handleNavigation = (route: string) => {
    handleClose()
    navigate(route)
  }

  return (
    <Dialog open={open} maxWidth="lg">
      <LCDialogContent spacing={{ xs: 2, sm: 8 }}>
        <LCDialogTitle fontWeight={700}>
          Load confirmation uploaded
        </LCDialogTitle>
        <LCDialogText>
          Click here to check{' '}
          <LCDialogLink
            style={{ color: theme.palette.primary.main }}
            onClick={() => handleNavigation('order')}
          >
            New Order
          </LCDialogLink>{' '}
          or return to the{' '}
          <LCDialogLink
            style={{ color: theme.palette.primary.main }}
            onClick={() => handleNavigation('/')}
          >
            Home Page
          </LCDialogLink>
        </LCDialogText>
      </LCDialogContent>
      <CloseIcon src={Close} alt="close icon" onClick={handleClose} />
    </Dialog>
  )
}

export default LoadConfirmationSuccessDialog
