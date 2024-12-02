import { Dialog, DialogProps, useTheme } from '@mui/material'
import {
  CloseIcon,
  LCDialogContent,
  LCDialogLink,
  LCDialogText,
} from './load-confirmation-dialog.styles'
import Close from '../../assets/icons/Close.png'
import { useRef } from 'react'

type LCDProps = {
  handleClose: () => void
} & DialogProps

const LoadConfirmationDialog = ({ open, handleClose }: LCDProps) => {
  const theme = useTheme()
  const fileInputRef = useRef<HTMLInputElement | null>(null)

  const handleClick = () => {
    fileInputRef?.current?.click()
  }

  const handleFileUpload = (event: any) => {
    const file = event.target.files[0]
    if (file) {
      console.log('File selected:', file)
    }
  }

  return (
    <Dialog open={open}>
      <LCDialogContent spacing={8}>
        <LCDialogText>
          Drop files here or{' '}
          <LCDialogLink
            style={{ color: theme.palette.primary.main }}
            onClick={handleClick}
          >
            browse files
            <input
              type="file"
              style={{ display: 'none' }}
              ref={fileInputRef}
              onChange={handleFileUpload}
            />
          </LCDialogLink>
        </LCDialogText>
      </LCDialogContent>
      <CloseIcon src={Close} alt="close icon" onClick={handleClose} />
    </Dialog>
  )
}

export default LoadConfirmationDialog
