import Topbar from '../../components/topbar/topbar.component'
import { Container, FirstColumn } from './main-layout.styles'
import { Outlet } from 'react-router-dom'

const ThreeColLayout = () => {
  return (
    <>
      <Topbar />
      <Container container spacing={2}>
        <FirstColumn size={1.5}>1st col</FirstColumn>
        <Outlet />
        {/* <SecondColumn size={2.5}>
        
      </SecondColumn>
      <ThirdColumn size={8}>3rd col</ThirdColumn> */}
      </Container>
    </>
  )
}

export default ThreeColLayout
