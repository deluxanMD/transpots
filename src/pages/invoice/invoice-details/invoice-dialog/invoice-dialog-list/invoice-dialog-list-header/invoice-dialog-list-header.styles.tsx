import { Stack } from '@mui/material'
import styled from 'styled-components'

export const Container = styled(Stack)`
  border-bottom: 1px solid #d9d9d9;
  display: flex;
  flex-direction: row !important;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
`

export const DoubleArrow = styled.img`
  width: 13.5px;
  height: 15px;
  cursor: pointer;
`

export const Arrow = styled.img`
  width: 7.5px;
  height: 15px;
  cursor: pointer;
`

export const Close = styled.img`
  width: 27px;
  height: 27px;
  cursor: pointer;
`
