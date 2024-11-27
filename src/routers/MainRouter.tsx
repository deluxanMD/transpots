import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from '../pages/home/Home'
import OrderPage from '../pages/order/order-page'
import MainLayout from '../layouts/main-layout/main-layout'
import TripPage from '../pages/trip/trip.page'

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
      ],
    },
  ])

  return <RouterProvider router={router} />
}

export default MainRouter
