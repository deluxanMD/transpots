import FormSingleColumnLayout from '../../../layouts/form-single-column-layout/form-single-column-layout'
import TextInputField from '../../fields/text-input-field/text-input-field.component'
import { LoadConfirmFormContainer } from '../forms.styles'

const LoadNotesForm = () => {
  return (
    <LoadConfirmFormContainer container spacing={2}>
      <FormSingleColumnLayout>
        <TextInputField label="Notes" multiline minRows={6} />
      </FormSingleColumnLayout>
    </LoadConfirmFormContainer>
  )
}

export default LoadNotesForm
