import { createBrowserRouter } from 'react-router'

import { AppLayout } from './pages/_layouts/app'
import { AuthLayout } from './pages/_layouts/auth'
import { WelcomeLayout } from './pages/_layouts/welcome'
import { Dashboard } from './pages/app/dashboard'
import { Finance } from './pages/app/financial-control/finance'
import { MembershipFee } from './pages/app/membership-fee'
import { Settings } from './pages/app/settings'
import { Welcome } from './pages/app/welcome'
import { SignIn } from './pages/auth/sign-in'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <WelcomeLayout />,
    children: [{ path: '/', element: <Welcome /> }],
  },
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { path: '/dashboard', element: <Dashboard /> },
      { path: '/finance', element: <Finance /> },
      { path: '/membership-fee', element: <MembershipFee /> },
      { path: '/settings', element: <Settings /> },
    ],
  },
  {
    path: '/',
    element: <AuthLayout />,
    children: [{ path: '/sign-in', element: <SignIn /> }],
  },
])
