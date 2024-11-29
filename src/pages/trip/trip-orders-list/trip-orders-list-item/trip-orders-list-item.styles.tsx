import { Stack, Typography } from '@mui/material'
import styled from 'styled-components'

export const OrdersListItemContainer = styled(Stack)`
  height: 50px;
  padding: 15px;
  border-bottom: 2px solid;
`
export const OrderTitle = styled(Typography)`
  font-size: 20px !important;
  font-weight: 700;
`
export const OrderItemContainer = styled(Stack)`
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 8px;
  padding-bottom: 8px;
  margin-top: 0px !important;
  border-bottom: 1px solid;
`
export const OrderItemName = styled(Typography)`
  text-transform: capitalize;
`
