import React from 'react'
import { LoadConfirmFormContainer } from '../forms.styles'
import TextInputField from '../../fields/text-input-field/text-input-field.component'
import FormSingleColumnLayout from '../../../layouts/form-single-column-layout/form-single-column-layout'

const LoadRateForm = () => {
  return (
    <LoadConfirmFormContainer container spacing={2}>
      <FormSingleColumnLayout>
        <TextInputField label="Currency" highlight />
        <TextInputField label="Base Rate" highlight />
        <TextInputField label="Detention Charges" />
        <TextInputField label="Layover Charges" />
        <TextInputField label="Fuel Surcharge" />
        <TextInputField label="Other Charges" />
      </FormSingleColumnLayout>
    </LoadConfirmFormContainer>
  )
}

export default LoadRateForm
