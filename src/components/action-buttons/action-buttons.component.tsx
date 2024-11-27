import { Button, ButtonProps, Stack } from '@mui/material'

type ActionButtonsProps = {
  primaryBtnText: string
  dangerBtnText: string
  handlePrimaryBtn: () => void
  handleDangerBtn: () => void
} & ButtonProps

const ActionButtons = ({
  primaryBtnText,
  dangerBtnText,
  handlePrimaryBtn,
  handleDangerBtn,
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
          bgcolor: 'primary.main',
          color: '#fff',
          borderRadius: '6px',
          textTransform: 'capitalize',
          fontWeight: 700,
          paddingX: '12px',
          paddingY: '6px',
        }}
        onClick={handlePrimaryBtn}
      >
        {primaryBtnText}
      </Button>
      <Button
        sx={{
          bgcolor: 'error.main',
          color: '#fff',
          borderRadius: '6px',
          textTransform: 'capitalize',
          fontWeight: 700,
          paddingX: '12px',
          paddingY: '6px',
        }}
        onClick={handleDangerBtn}
      >
        {dangerBtnText}
      </Button>
    </Stack>
  )
}

export default ActionButtons
