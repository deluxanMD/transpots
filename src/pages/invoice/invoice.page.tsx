import TwoColumnLayout from '../../layouts/two-column-layout/two-column-layout'
import InvoiceDetails from './invoice-details/invoice-details'
import InvoiceMobile from './invoice-mobile/invoice-mobile'
import InvoiceSelection from './invoice-selection/invoice-selection'

const InvoicePage = () => {
  return (
    <TwoColumnLayout>
      <InvoiceSelection />
      <InvoiceDetails />
      <InvoiceMobile />
    </TwoColumnLayout>
  )
}

export default InvoicePage
