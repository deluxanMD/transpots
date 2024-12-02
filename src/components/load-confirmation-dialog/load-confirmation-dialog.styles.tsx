import { Stack, Typography } from '@mui/material'
import styled from 'styled-components'

export const LCDialogContent = styled(Stack)`
  /* width: 840px; */
  height: 400px;
  padding: 24px 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`

export const LCDialogTitle = styled(Typography)`
  font-size: 40px !important;
  text-align: center;
  line-height: 40px !important;

  @media (max-width: 600px) {
    font-size: 20px !important;
    line-height: 22px !important;
  }
`

export const LCDialogText = styled(Typography)`
  font-size: 40px !important;
  text-align: center;
  font-weight: 300 !important;

  @media (max-width: 600px) {
    font-size: 17px !important;
    line-height: 22px !important;
  }
`

export const LCDialogLink = styled.span`
  font-size: 40px;
  font-weight: 300;
  cursor: pointer;
  text-align: center;
  line-height: 40px !important;

  @media (max-width: 600px) {
    font-size: 17px !important;
    line-height: 22px !important;
  }
`

export const CloseIcon = styled.img`
  width: 60px;
  height: 60px;
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;

  @media (max-width: 600px) {
    width: 30px;
    height: 30px;
  }
`
