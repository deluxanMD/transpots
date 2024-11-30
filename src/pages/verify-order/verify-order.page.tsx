import TwoEqualColumnLayout from '../../layouts/two-equal-column-layout/two-equal-column-layout'
import VerifyOrderForm from './verify-order-form/verify-order-form'
import VerifyOrderMobile from './verify-order-mobile/verify-order-mobile'
import VerifyOrderPdf from './verify-order-pdf/verify-order-pdf'

const VerifyOrder = () => {
  return (
    <TwoEqualColumnLayout>
      <VerifyOrderPdf />
      <VerifyOrderForm />
      <VerifyOrderMobile />
    </TwoEqualColumnLayout>
  )
}

export default VerifyOrder
