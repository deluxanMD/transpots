import { Company, TripDetail } from '../../../trip.types'
import { formatAddress } from '../../../trip.utils'
import Edit from '../../../../../assets/icons/Edit.png'
import Check from '../../../../../assets/icons/Check-Circle-Green.png'
import {
  Stack,
  styled,
  TableCell,
  tableCellClasses,
  Typography,
} from '@mui/material'
import TextInputField from '../../../../../components/fields/text-input-field/text-input-field.component'
import { ChangeEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import {
  convertToDelivery,
  convertToDrop,
  updateAddress,
} from '../../../../../store/trips/trips.slice'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    color: theme.palette.common.white,
    fontSize: 18,
    // padding: '4px 12px',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 18,
    // padding: '4px 12px',
  },
}))

type AddressProps = {
  setIsEdit: (isEdit: boolean) => void
} & TripDetail

const TripDetailsExistingAddress = ({
  equipment: { equipmentId },
  company,
  setIsEdit,
}: AddressProps) => {
  const dispatch = useDispatch()

  const handleEdit = () => {
    setIsEdit(true)
    dispatch(convertToDelivery({ id: equipmentId }))
  }

  return (
    <Stack direction="row" spacing={1}>
      <img
        src={Edit}
        alt="Edit Icon"
        width={46}
        height={46}
        style={{ cursor: 'pointer' }}
        onClick={handleEdit}
      />
      <Stack>
        <Typography
          sx={{
            color: 'InfoText',
            fontWeight: 700,
          }}
        >
          {company.companyName}
        </Typography>
        <Typography
          sx={{
            color: 'InfoText',
            fontWeight: 'normal',
          }}
        >
          {formatAddress(company.address)}
        </Typography>
      </Stack>
    </Stack>
  )
}

const TripDetailsNewAddress = ({
  row,
  setIsEdit,
}: {
  row: TripDetail
  setIsEdit: (isEdit: boolean) => void
}) => {
  const dispatch = useDispatch()

  const [company, setCompany] = useState<Company>({
    address: { city: '', state: '', street: '' },
    companyId: row.company.companyId,
    companyName: '',
  })

  const [error, setError] = useState(false)

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    type: 'company' | 'street' | 'city' | 'state'
  ) => {
    const { value } = event.target

    switch (type) {
      case 'company':
        return setCompany({ ...company, companyName: value })
      case 'street':
        return setCompany({
          ...company,
          address: { ...company.address, street: value },
        })
      case 'city':
        return setCompany({
          ...company,
          address: { ...company.address, city: value },
        })
      case 'state':
        return setCompany({
          ...company,
          address: { ...company.address, state: value },
        })
    }
  }

  const updateNewAddress = () => {
    if (
      company.companyName === '' ||
      company.address.street === '' ||
      company.address.city === '' ||
      company.address.state === ''
    ) {
      setError(true)
    } else {
      setIsEdit(false)
      dispatch(updateAddress({ trip: row, company }))
      dispatch(convertToDrop({ id: row.equipment.equipmentId }))
    }
  }

  return (
    <Stack direction="row" spacing={1}>
      <img
        src={Check}
        alt="Check Icon"
        width={46}
        height={46}
        style={{ cursor: 'pointer' }}
        onClick={updateNewAddress}
      />
      <Stack spacing={1}>
        <TextInputField
          placeholder="Company"
          error
          onChange={(e) => handleChange(e, 'company')}
          value={company.companyName}
        />
        <TextInputField
          placeholder="Street"
          error
          onChange={(e) => handleChange(e, 'street')}
          value={company.address.street}
        />
        <TextInputField
          placeholder="City"
          error
          onChange={(e) => handleChange(e, 'city')}
          value={company.address.city}
        />
        <TextInputField
          placeholder="State"
          error
          onChange={(e) => handleChange(e, 'state')}
          value={company.address.state}
        />
        {error && (
          <Typography color="error.main" fontSize={16}>
            All fields are required
          </Typography>
        )}
      </Stack>
    </Stack>
  )
}

const TripDetailsTableCompany = (row: TripDetail) => {
  const [isEdit, setIsEdit] = useState(false)

  return (
    <StyledTableCell sx={{ minWidth: 260 }}>
      {isEdit ? (
        <TripDetailsNewAddress setIsEdit={setIsEdit} row={row} />
      ) : (
        <TripDetailsExistingAddress setIsEdit={setIsEdit} {...row} />
      )}
    </StyledTableCell>
  )
}

export default TripDetailsTableCompany
