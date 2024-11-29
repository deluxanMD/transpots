import { Drawer, useTheme } from '@mui/material'
import Sidebar from '../sidebar/sidebar.component'

type MobileNavProps = {
  open: boolean
  close: () => void
}

const MobileNav = ({ open, close }: MobileNavProps) => {
  const theme = useTheme()

  return (
    <Drawer open={open} onClose={close}>
      <div
        style={{
          width: 120,
          height: '100vh',
          paddingRight: '12px',
          backgroundColor: theme.palette.secondary.main,
          overflow: 'hidden',
        }}
      >
        <Sidebar close={close} />
      </div>
    </Drawer>
  )
}

export default MobileNav
