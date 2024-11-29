import {
  FormControl,
  MenuItem,
  SelectChangeEvent,
  SelectProps,
  Stack,
  Typography,
  useTheme,
} from '@mui/material'
import { useState } from 'react'
import { DriverSelect } from './select-field.styles'
import DropdownArrow from '../../assets/icons/DropdownArrow.png'

type SelectDriverProps = {
  options: string[]
} & SelectProps

const SelectField = ({ options, label }: SelectDriverProps) => {
  const theme = useTheme()
  const [value, setValue] = useState('')

  const handleChange = (event: SelectChangeEvent<any>) => {
    setValue(event.target.value as string)
  }

  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <Typography sx={{ fontWeight: 300 }}>{label}</Typography>
      <FormControl>
        <DriverSelect
          labelId="select-field"
          id="select-field"
          value={value === '' ? label : value}
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
          <MenuItem value="Select Driver">{label}</MenuItem>
          {options.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </DriverSelect>
      </FormControl>
    </Stack>
  )
}

export default SelectField
