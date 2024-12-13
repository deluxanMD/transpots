import { Stack } from '@mui/material'
import styled from 'styled-components'

export const ListContainer = styled(Stack)`
  padding: 16px;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.palette.primary.main};
    color: white;
  }
`
