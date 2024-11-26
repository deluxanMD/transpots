import { ListItemButton } from '@mui/material'
import styled from 'styled-components'

export const CustomListItemButton = styled(ListItemButton)`
  height: 32px;

  &.Mui-selected {
    background-color: #2264e5 !important;
    color: #ffffff;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;

    span {
      font-weight: 700;
    }
  }
`
