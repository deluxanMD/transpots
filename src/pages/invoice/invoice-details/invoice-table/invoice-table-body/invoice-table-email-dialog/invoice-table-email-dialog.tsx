import {
  Box,
  Button,
  Dialog,
  Divider,
  List,
  ListItem,
  ListItemText,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import React from 'react'

type InvoiceTableEmailDialogProps = {
  open: boolean
  handleClose: () => void
}

const infos = [
  'From: invoice@transpots.com',
  'To: invoice@apotex.com',
  'Subject: Invoice INV1234',
  'Message: Your invoice amount for load #1234 is $55.00',
]

const InvoiceTableEmailDialog = ({
  open,
  handleClose,
}: InvoiceTableEmailDialogProps) => {
  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <Dialog
      fullScreen={fullScreen}
      open={open}
      onClose={handleClose}
      fullWidth
      maxWidth="md"
    >
      <Box>
        <Typography sx={{ bgcolor: 'secondary.light', p: 2 }}>
          Send by Email / ORD123456
        </Typography>

        <List>
          {infos.map((info) => (
            <React.Fragment key={info}>
              <ListItem>
                <ListItemText>{info}</ListItemText>
              </ListItem>
              <Divider />
            </React.Fragment>
          ))}
        </List>

        <Stack p={2} spacing={2}>
          <Stack direction="row" justifyContent="space-between">
            <Typography fontWeight={700}>Attachments</Typography>
            <Button
              variant="contained"
              sx={{
                borderRadius: '6px',
                textTransform: 'capitalize',
                fontWeight: 700,
              }}
            >
              Add Attachment
            </Button>
          </Stack>

          <Typography fontWeight={700} color="primary">
            Invoice
          </Typography>
          <Typography fontWeight={700} color="primary">
            Load Confirmation
          </Typography>
          <Typography fontWeight={700} color="primary">
            BOL
          </Typography>
          <Typography fontWeight={700} color="primary">
            POD
          </Typography>
        </Stack>
      </Box>

      <Stack
        direction="row"
        justifyContent="center"
        p={2}
        spacing={2}
        sx={{ borderTop: '1px solid #D9D9D9' }}
      >
        <Button
          variant="contained"
          sx={{
            borderRadius: '6px',
            textTransform: 'capitalize',
            fontWeight: 700,
            bgcolor: 'secondary.main',
            minWidth: '150px',
          }}
          onClick={handleClose}
        >
          Cancel
        </Button>

        <Button
          variant="contained"
          sx={{
            borderRadius: '6px',
            textTransform: 'capitalize',
            fontWeight: 700,
            bgcolor: 'primary.main',
            minWidth: '150px',
          }}
          onClick={handleClose}
        >
          Send Invoice
        </Button>
      </Stack>
    </Dialog>
  )
}

export default InvoiceTableEmailDialog
