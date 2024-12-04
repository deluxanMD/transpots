import { Button, ButtonProps } from '@mui/material'
import { Buttoncontainer } from './action-buttons.styles'

type ActionButtonsProps = {
  firstBtnProps: { bgColor?: string } & ButtonProps
  secondBtnProps: { bgColor?: string } & ButtonProps
}

const ActionButtons = ({
  firstBtnProps,
  secondBtnProps,
}: ActionButtonsProps) => {
  return (
    <Buttoncontainer
      direction="row"
      justifyContent="center"
      spacing={2}
      p={1}
      borderTop={0.6}
    >
      <Button
        {...firstBtnProps}
        sx={{
          bgcolor: firstBtnProps.bgColor ?? 'primary.main',
          color: 'common.white',
          borderRadius: '6px',
          textTransform: 'capitalize',
          fontWeight: 700,
          paddingX: '12px',
          paddingY: '6px',
          minWidth: '170px',
        }}
        onClick={firstBtnProps.onClick}
      >
        {firstBtnProps.title}
      </Button>
      <Button
        {...secondBtnProps}
        sx={{
          bgcolor: secondBtnProps.bgColor ?? 'error.main',
          color: 'common.white',
          borderRadius: '6px',
          textTransform: 'capitalize',
          fontWeight: 700,
          paddingX: '12px',
          paddingY: '6px',
          minWidth: '170px',
        }}
        onClick={secondBtnProps.onClick}
      >
        {secondBtnProps.title}
      </Button>
    </Buttoncontainer>
  )
}

export default ActionButtons
