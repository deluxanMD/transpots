import Sidebar from '../../components/sidebar/sidebar.component'
import Topbar from '../../components/topbar/topbar.component'
import { Container, FirstColumn } from './main-layout.styles'
import { Outlet } from 'react-router-dom'

const ThreeColLayout = () => {
  return (
    <>
      <Topbar />
      <Container
        container
        spacing={1}
        py={1}
        pr={1}
        pl={{ xs: 1, lg: 0 }}
        style={{ display: 'flex', flexDirection: 'row', minHeight: '100vh' }}
      >
        <FirstColumn size={1} sx={{ display: { xs: 'none', lg: 'block' } }}>
          <Sidebar />
        </FirstColumn>
        <Outlet />
      </Container>
    </>
  )
}

export default ThreeColLayout
