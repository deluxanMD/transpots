import { Box, Button } from '@mui/material'
import styled from 'styled-components'

export const AddEquipmentBtnContainer = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px;
`

export const AddEquipmentBtn = styled(Button)`
  && {
    background-color: ${({ theme }) => theme.palette.success.main};
    color: #fff;
    text-transform: capitalize;
    font-size: 20px;
    font-weight: 700;
    border-radius: 6px;
  }
`
