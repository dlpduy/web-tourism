import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Header from './components/layout/header.tsx'
import Footer from './components/layout/footer.tsx'
import HomePage from './pages/home.tsx'
import Register from './pages/register.tsx'
import Desnitation from './pages/destination.tsx'
import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'
import DesnitationDetail from './pages/destination.detail.tsx'

const queryClient = new QueryClient()

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
    path: "/destination",
    element: <>
      <Header />
      <Desnitation />
      <Footer />
    </>
  },
  {
    path: "/about-us",
    element: <>
      <Header />
      <Register />
      <Footer />
    </>
  },
  {
    path: "/destination/:id",
    element: <>
      <Header />
      <DesnitationDetail />
      <Footer />
    </>
  }

]);
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>,
)
