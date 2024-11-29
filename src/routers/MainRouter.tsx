import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from '../pages/home/Home'
import OrderPage from '../pages/order/order-page'
import MainLayout from '../layouts/main-layout/main-layout'
import TripPage from '../pages/trip/trip.page'
import IntegrationPage from '../pages/integration/integration.page'

const MainRouter = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: 'order',
          element: <OrderPage />,
        },
        {
          path: 'trip',
          element: <TripPage />,
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
