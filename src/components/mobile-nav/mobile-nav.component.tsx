import { Drawer } from '@mui/material'
import Sidebar from '../sidebar/sidebar.component'

type MobileNavProps = {
  open: boolean
  close: () => void
}

const MobileNav = ({ open, close }: MobileNavProps) => {
  return (
    <Drawer open={open} onClose={close}>
      <div style={{ width: 200, paddingRight: 12 }}>
        <Sidebar close={close} />
      </div>
    </Drawer>
  )
}

export default MobileNav
