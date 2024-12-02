import { Paper } from '@mui/material'
import styled from 'styled-components'

export const Container = styled(Paper)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 0.4rem;
  padding-right: 0.4rem;
  height: 50px;
  border-radius: 0px !important;
  position: sticky;
  top: 0;
  z-index: 1;
`
