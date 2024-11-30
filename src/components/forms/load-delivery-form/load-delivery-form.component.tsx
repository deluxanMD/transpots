import { LoadConfirmFormContainer } from '../forms.styles'
import FormTwoColumnLayout from '../../../layouts/form-two-column-layout/form-two-column-layout'
import TextInputField from '../../fields/text-input-field/text-input-field.component'
import FormSingleColumnLayout from '../../../layouts/form-single-column-layout/form-single-column-layout'

const LoadDeliveryForm = () => {
  return (
    <LoadConfirmFormContainer container spacing={2}>
      <FormTwoColumnLayout>
        <TextInputField label="Start Delivery Date" highlight />
        <TextInputField label="End Delivery Date" highlight />
        <TextInputField label="Start Delivery Time" highlight />
        <TextInputField label="End Delivery Time" highlight />
      </FormTwoColumnLayout>

      <FormSingleColumnLayout>
        <TextInputField label="Delivery Company Name" highlight />
        <TextInputField label="Delivery Company Address" highlight />
        <TextInputField label="Shipment Notes" />
      </FormSingleColumnLayout>
    </LoadConfirmFormContainer>
  )
}

export default LoadDeliveryForm
