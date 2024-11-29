import { Button, ButtonProps, Stack } from '@mui/material'

type ActionButtonsProps = {
  firstBtnProps: { bgColor?: string } & ButtonProps
  secondBtnProps: { bgColor?: string } & ButtonProps
}

const ActionButtons = ({
  firstBtnProps,
  secondBtnProps,
}: ActionButtonsProps) => {
  return (
    <Stack
      direction="row"
      justifyContent="center"
      spacing={2}
      p={1}
      borderTop={0.6}
      sx={{
        position: 'sticky',
        bottom: 0,
        backgroundColor: 'Background',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
      }}
    >
      <Button
        sx={{
          bgcolor: firstBtnProps.bgColor ?? 'primary.main',
          color: 'common.white',
          borderRadius: '6px',
          textTransform: 'capitalize',
          fontWeight: 700,
          paddingX: '12px',
          paddingY: '6px',
        }}
        onClick={firstBtnProps.onClick}
      >
        {firstBtnProps.title}
      </Button>
      <Button
        sx={{
          bgcolor: secondBtnProps.bgColor ?? 'error.main',
          color: 'common.white',
          borderRadius: '6px',
          textTransform: 'capitalize',
          fontWeight: 700,
          paddingX: '12px',
          paddingY: '6px',
        }}
        onClick={secondBtnProps.onClick}
      >
        {secondBtnProps.title}
      </Button>
    </Stack>
  )
}

export default ActionButtons
