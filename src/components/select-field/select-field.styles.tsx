import { Select } from '@mui/material'
import styled from 'styled-components'

export const DriverSelect = styled(Select)`
  border-radius: '5px';
  width: '183px';
  height: '37px';
  background-color: ${({ theme }) => theme.palette.primary.main};
  display: 'flex';
  align-items: 'center';
  justify-content: 'center';
  outline: 'none';
  border: 0;
  font-weight: 700;
`
