import { Box, ListItemButton } from '@mui/material'
import styled from 'styled-components'

export const Container = styled(Box)`
  width: 100%;
  display: flex;
  height: calc(100vh - 66px);
  flex-direction: column;
  justify-content: space-between;
  position: sticky;
  top: 60px;
  left: 0;
`

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
