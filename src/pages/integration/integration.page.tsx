import {
  Card,
  CardContent,
  Grid2,
  Stack,
  Typography,
  useTheme,
} from '@mui/material'
import SingleColumnLayout from '../../layouts/single-column-layout/single-column-layout'
import Quickbooks from '../../assets/images/quickbooks.png'
import Motive from '../../assets/images/motive.png'
import { IntegrationChip } from './integration.styles'

const Integration = () => {
  const theme = useTheme()

  return (
    <SingleColumnLayout>
      <Grid2 container p={2} sx={{ height: 'calc(100vh - 80px)' }} spacing={2}>
        <Grid2 size={{ xs: 12, md: 3 }}>
          <Card sx={{ borderRadius: 0 }} elevation={4}>
            <CardContent
              sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: 250,
                justifyContent: 'space-between',
              }}
            >
              <img src={Quickbooks} width={120} height={30} alt="quickbooks" />
              <Typography fontWeight={300}>
                1. Invoices created in Transpots automatically export to
                QuickBooks.
              </Typography>
              <Typography fontWeight={300}>
                2. Any changes made are updated in both systems
              </Typography>

              <Stack direction="row" justifyContent="space-between">
                <IntegrationChip style={{ border: '1px solid #D9D9D9' }}>
                  Financial
                </IntegrationChip>

                <IntegrationChip
                  style={{
                    backgroundColor: theme.palette.primary.main,
                    color: theme.palette.common.white,
                  }}
                >
                  Enable App
                </IntegrationChip>
              </Stack>
            </CardContent>
          </Card>
        </Grid2>

        <Grid2 size={{ xs: 12, md: 3 }}>
          <Card sx={{ borderRadius: 0 }} elevation={4}>
            <CardContent
              sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: 250,
                justifyContent: 'space-between',
              }}
            >
              <img src={Motive} width={110} height={50} alt="motive" />
              <Typography fontWeight={300}>
                Enable real-time track and trace for your trucks & track driver
                HOS using Motive&#39;s GPS data
              </Typography>

              <Stack direction="row" justifyContent="space-between">
                <IntegrationChip style={{ border: '1px solid #D9D9D9' }}>
                  Track & Trace
                </IntegrationChip>

                <IntegrationChip
                  style={{
                    backgroundColor: theme.palette.success.main,
                    color: theme.palette.common.white,
                  }}
                >
                  Enabled
                </IntegrationChip>
              </Stack>
            </CardContent>
          </Card>
        </Grid2>

        <Grid2 size={{ xs: 12, md: 3 }}>
          <Card sx={{ borderRadius: 0 }} elevation={4}>
            <CardContent
              sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: 250,
                justifyContent: 'space-between',
              }}
            >
              <img src={Motive} width={110} height={50} alt="motive" />
              <Typography fontWeight={300}>
                Enable real-time track and trace for your trucks & track driver
                HOS using Motive&#39;s GPS data
              </Typography>

              <Stack direction="row" justifyContent="space-between">
                <IntegrationChip style={{ border: '1px solid #D9D9D9' }}>
                  Track & Trace
                </IntegrationChip>

                <IntegrationChip
                  style={{
                    backgroundColor: theme.palette.success.main,
                    color: theme.palette.common.white,
                  }}
                >
                  Enabled
                </IntegrationChip>
              </Stack>
            </CardContent>
          </Card>
        </Grid2>
      </Grid2>
    </SingleColumnLayout>
  )
}

export default Integration
