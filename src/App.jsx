import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import AllCars from './components/AllCars/AllCars'
import MainLayout from './components/MainLayout/MainLayout'
import SpecificCar from './components/SpecificCar/SpecificCar'
import CarPage from './components/CarPage/CarPage'

function App() {
  let routes = createBrowserRouter([{
    path:"/",
    element: <MainLayout />,
    children: [
        { index: true, element: <Home /> },
      {
        path: "cars", element: <AllCars />,
        children: [
          { index: true, element: <CarPage /> },
          { path: "cardetail", element: <SpecificCar /> },
          ]
        },
      ]
    }
])
  
  return (
    <>
      <RouterProvider router={routes}/>
    </>
  )
}

export default App
