import {
  FormControl,
  MenuItem,
  SelectChangeEvent,
  Stack,
  Typography,
  useTheme,
} from '@mui/material'
import { useState } from 'react'
import { DriverSelect } from './select-driver.styles'
import DropdownArrow from '../../assets/icons/DropdownArrow.png'

type SelectDriverProps = {
  drivers: string[]
}

const SelectDriver = ({ drivers }: SelectDriverProps) => {
  const theme = useTheme()
  const [driver, setDriver] = useState('')

  const handleChange = (event: SelectChangeEvent<any>) => {
    setDriver(event.target.value as string)
  }

  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <Typography
        sx={{
          fontWeight: 300,
        }}
      >
        Driver Name
      </Typography>
      <FormControl>
        <DriverSelect
          labelId="select-driver"
          id="select-driver"
          value={driver === '' ? 'Select Driver' : driver}
          size="small"
          onChange={handleChange}
          theme={theme}
          sx={{
            color: 'common.white',
            fontWeight: 700,
          }}
          IconComponent={() => (
            <img
              src={DropdownArrow}
              alt="dropdown arrow"
              width={19}
              height={13}
              style={{ marginRight: '10px' }}
            />
          )}
        >
          <MenuItem value="Select Driver">Select Driver</MenuItem>
          {drivers.map((driver) => (
            <MenuItem key={driver} value={driver}>
              {driver}
            </MenuItem>
          ))}
        </DriverSelect>
      </FormControl>
    </Stack>
  )
}

export default SelectDriver
