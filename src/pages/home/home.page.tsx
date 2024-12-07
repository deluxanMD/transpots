import { Grid2, Stack } from '@mui/material'
import SingleColumnLayout from '../../layouts/single-column-layout/single-column-layout'
import CustomSkeleton from '../../components/custom-skeleton/custom-skeleton.component'

const Home = () => {
  return (
    <SingleColumnLayout>
      <Stack direction="row" spacing={2} pt={2}>
        <Grid2 size={{ xs: 12, lg: 4 }}>
          <CustomSkeleton height={120} text="ORDER" />
        </Grid2>
        <Grid2 size={{ xs: 12, lg: 4 }}>
          <CustomSkeleton height={120} text="TRIP" />
        </Grid2>
        <Grid2 size={{ xs: 12, lg: 4 }}>
          <CustomSkeleton height={120} text="INVOICE" />
        </Grid2>
      </Stack>
      <Stack spacing={2} mt={2}>
        <Grid2 size={12}>
          <CustomSkeleton height={1200} />
        </Grid2>
      </Stack>
    </SingleColumnLayout>
  )
}

export default Home
