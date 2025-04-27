import { Outlet } from 'react-router'

import { WelcomeHeader } from '@/components/welcome-header'

export function WelcomeLayout() {
  return (
    <div className="flex h-screen w-screen flex-1 flex-col overflow-auto">
      <WelcomeHeader />
      <Outlet />
    </div>
  )
}
