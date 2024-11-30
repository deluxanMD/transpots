import { LoadConfirmFormContainer } from '../forms.styles'
import TextInputField from '../../fields/text-input-field/text-input-field.component'
import FormTwoColumnLayout from '../../../layouts/form-two-column-layout/form-two-column-layout'
import FormSingleColumnLayout from '../../../layouts/form-single-column-layout/form-single-column-layout'

const LoadPickupForm = () => {
  return (
    <LoadConfirmFormContainer container spacing={2}>
      <FormTwoColumnLayout>
        <TextInputField label="Start Pickup Date" highlight />
        <TextInputField label="End Pickup Date" highlight />
        <TextInputField label="Start Pickup Time" highlight />
        <TextInputField label="End Pickup Time" highlight />
      </FormTwoColumnLayout>

      <FormSingleColumnLayout>
        <TextInputField label="Pickup Company Name" highlight />
        <TextInputField label="Pickup Company Address" highlight />
      </FormSingleColumnLayout>

      <FormTwoColumnLayout>
        <TextInputField label="FTL or LTL" />
        <TextInputField label="Load Count" />
        <TextInputField label="Temp" />
        <TextInputField label="Hazmat" />
        <TextInputField label="Pickup#" />
        <TextInputField label="Weight" />
      </FormTwoColumnLayout>

      <FormSingleColumnLayout>
        <TextInputField label="Shipment Notes" />
      </FormSingleColumnLayout>
    </LoadConfirmFormContainer>
  )
}

export default LoadPickupForm
