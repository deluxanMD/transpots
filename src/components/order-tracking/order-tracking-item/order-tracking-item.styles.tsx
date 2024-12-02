import { Button } from '@mui/material'
import styled from 'styled-components'

export const TrackingButton = styled(Button)`
  && {
    padding-left: 12px;
    padding-right: 12px;
    padding-top: 6px;
    padding-bottom: 6px;
    border-radius: 6px;
    text-transform: capitalize;
    font-weight: 700;
    background-color: ${({ theme }) => theme.palette.primary.main};
    color: ${({ theme }) => theme.palette.common.white};
  }
`
