import { Box, List, ListItemText } from '@mui/material'
import { CustomListItemButton } from './sidebar.styles'
import { sidebars } from './sidebar.constant'
import { useLocation, useNavigate } from 'react-router-dom'
import SidebarButtons from '../sidebar-buttons/sidebar-buttons.component'

type SidebarProps = {
  close?: () => void
}

const Sidebar = ({ close }: SidebarProps) => {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        height: 'calc(100vh - 66px)',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <List component="nav">
        {sidebars.map((sidebar) => (
          <CustomListItemButton
            key={sidebar.label}
            onClick={() => {
              navigate(sidebar.href)
              if (close) {
                close()
              }
            }}
            selected={pathname.endsWith(sidebar.href)}
            sx={{ mb: 2 }}
          >
            <ListItemText primary={sidebar.label} />
          </CustomListItemButton>
        ))}
      </List>
      <SidebarButtons />
    </Box>
  )
}

export default Sidebar
