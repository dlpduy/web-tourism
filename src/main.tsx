import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Header from './components/layout/header.tsx'
import Footer from './components/layout/footer.tsx'
import HomePage from './pages/product.tsx'
import Experience from './pages/experience.tsx'
import Coupon from './pages/coupon.tsx'
import AboutUS from './pages/aboutus.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <>
      <Header />
      <HomePage />
      <Footer />
    </>
  },
  {
    path: "/trai-nghiem",
    element: <>
      <Header />
      <Experience />
      <Footer />
    </>
  },
  {
    path: "/uu-dai",
    element: <>
      <Header />
      <Coupon />
      <Footer />
    </>
  },
  {
    path: "/ve-chung-toi",
    element: <>
      <Header />
      <AboutUS />
      <Footer />
    </>
  }

]);
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />

  </StrictMode>,
)
