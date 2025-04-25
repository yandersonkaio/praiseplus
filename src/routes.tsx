import { createBrowserRouter } from 'react-router'

import { AppLayout } from './pages/_layouts/app'
import { AuthLayout } from './pages/_layouts/auth'
import { Dashboard } from './pages/app/dashboard'
import { Finance } from './pages/app/finance'
import { MembershipFee } from './pages/app/membership-fee'
import { Settings } from './pages/app/settings'
import { SignIn } from './pages/auth/sign-in'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { path: '/', element: <Dashboard /> },
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
