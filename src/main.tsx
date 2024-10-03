import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LoginPage from './pages/login.tsx'
import Header from './components/layout/header.tsx'
import Footer from './components/layout/footer.tsx'
import HomePage from './pages/home.tsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <>
      <Header />,
      <HomePage />
      <Footer />
    </>
  },
  {
    path: "/login",
    element: <>
      <Header />,
      <LoginPage />
      <Footer />
    </>

  }

]);
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
