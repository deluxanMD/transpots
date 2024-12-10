import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from '../pages/home/home.page'
import OrderPage from '../pages/order/order-page'
import MainLayout from '../layouts/main-layout/main-layout'
import TripPage from '../pages/trip/trip.page'
import IntegrationPage from '../pages/integration/integration.page'
import VerifyOrderPage from '../pages/verify-order/verify-order.page'
import InvoicePage from '../pages/invoice/invoice.page'

const MainRouter = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        {
          path: '/',
          element: <HomePage />,
        },
        {
          path: 'order',
          children: [
            {
              path: '',
              element: <OrderPage />,
            },
            {
              path: 'verify',
              element: <VerifyOrderPage />,
            },
          ],
        },
        {
          path: 'trip',
          element: <TripPage />,
        },
        {
          path: 'invoice',
          children: [
            {
              index: true,
              element: <InvoicePage />,
            },
            {
              path: ':invoiceId',
              element: <InvoicePage />,
            },
          ],
        },
        {
          path: 'integration',
          element: <IntegrationPage />,
        },
      ],
    },
  ])

  return <RouterProvider router={router} />
}

export default MainRouter
