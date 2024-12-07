import TwoColumnLayout from '../../layouts/two-column-layout/two-column-layout'
import InvoiceDetails from './invoice-details/invoice-details'
import InvoiceSelection from './invoice-selection/invoice-selection'

const InvoicePage = () => {
  return (
    <TwoColumnLayout>
      <InvoiceSelection />
      <InvoiceDetails />
    </TwoColumnLayout>
  )
}

export default InvoicePage
