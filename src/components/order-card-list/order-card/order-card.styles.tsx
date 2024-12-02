import { Stack } from '@mui/material'
import styled from 'styled-components'

export const OrderCardContainer = styled.div`
  border-radius: 8px;
  cursor: pointer;
`
export const OrderCardContent = styled.div`
  padding: 8px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: #ffffff;
`
export const OrderCardStatus = styled(Stack)`
  padding: 8px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`
