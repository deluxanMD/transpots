import {
  FormControl,
  MenuItem,
  SelectProps,
  Stack,
  Typography,
  useTheme,
} from '@mui/material'
import { DriverSelect } from './select-field.styles'
import DropdownArrow from '../../assets/icons/DropdownArrow.png'

type SelectDriverProps = {
  options: string[]
  hideLabel?: boolean
} & SelectProps

const SelectField = ({
  options,
  label,
  hideLabel = false,
  value,
  onChange,
  ...rest
}: SelectDriverProps) => {
  const theme = useTheme()

  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      {!hideLabel && <Typography sx={{ fontWeight: 300 }}>{label}</Typography>}
      <FormControl>
        <DriverSelect
          labelId="select-field"
          id="select-field"
          value={value}
          size="small"
          onChange={onChange}
          theme={theme}
          sx={{
            color: 'common.white',
            fontWeight: 700,
            borderRadius: '6px',
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
          {...rest}
        >
          {!hideLabel && <MenuItem value="Select Driver">{label}</MenuItem>}
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
