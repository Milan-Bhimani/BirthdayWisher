import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './layout.jsx'
import BirthdayApp from './BirthdayApp.jsx'
import DetailsPage from './DetailsPage.jsx'
import WishesPage from './MiddlePage.jsx'
import {Route,createBrowserRouter,RouterProvider,createRoutesFromElements} from 'react-router-dom'
import 'animate.css';
import './index.css';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path ='/' element = {<Layout />}>
    <Route exact path="/BirthdayApp" element={<BirthdayApp />} />,
    <Route exact path="/" element={<DetailsPage />} />,
    <Route exact path="/sure" element={<WishesPage />} />
  </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
