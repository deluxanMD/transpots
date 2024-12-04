import { List, ListItemText } from '@mui/material'
import { Container, CustomListItemButton } from './sidebar.styles'
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
    <Container>
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
            selected={
              pathname !== '/' && sidebar.href !== '/'
                ? pathname.includes(sidebar.href)
                : pathname.endsWith(sidebar.href)
            }
            sx={{ mb: 2 }}
          >
            <ListItemText primary={sidebar.label} />
          </CustomListItemButton>
        ))}
      </List>
      <SidebarButtons />
    </Container>
  )
}

export default Sidebar
