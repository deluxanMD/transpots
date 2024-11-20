import { Stack } from '@mui/material'
import styled from 'styled-components'

export const OrderCardContainer = styled.div`
  border: 0.8px solid #ccc;
  border-radius: 8px;
  cursor: pointer;
`
export const OrderCardContent = styled.div`
  padding: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: #ffffff;
  border-bottom: 1px solid #ccc;
`
export const OrderCardStatus = styled(Stack)`
  padding: 8px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
`
