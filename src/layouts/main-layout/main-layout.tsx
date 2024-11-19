import Sidebar from '../../components/sidebar/sidebar.component'
import Topbar from '../../components/topbar/topbar.component'
import { Container, FirstColumn } from './main-layout.styles'
import { Outlet } from 'react-router-dom'

const ThreeColLayout = () => {
  return (
    <>
      <Topbar />
      <Container container spacing={2}>
        <FirstColumn size={1.5} sx={{ display: { xs: 'none', md: 'block' } }}>
          <Sidebar />
        </FirstColumn>
        <Outlet />
      </Container>
    </>
  )
}

export default ThreeColLayout
