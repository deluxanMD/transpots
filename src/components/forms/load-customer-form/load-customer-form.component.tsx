import FormSingleColumnLayout from '../../../layouts/form-single-column-layout/form-single-column-layout'
import TextInputField from '../../fields/text-input-field/text-input-field.component'
import { LoadConfirmFormContainer } from '../forms.styles'

const LoadCustomerForm = () => {
  return (
    <LoadConfirmFormContainer container spacing={2}>
      <FormSingleColumnLayout>
        <TextInputField
          label="Customer Name"
          placeholder="Apotex Inc"
          highlight
        />
        <TextInputField label="Address" />
        <TextInputField label="Load#" highlight />
        <TextInputField label="Invoice & POD Email" highlight />
        <TextInputField label="Notification Email" />
        <TextInputField label="AP Email" />
        <TextInputField label="Phone" />
        <TextInputField label="Other" />
      </FormSingleColumnLayout>
    </LoadConfirmFormContainer>
  )
}

export default LoadCustomerForm
