import { Outlet } from 'react-router'

import { AppHeader } from '@/components/app-header'
import { AppSidebar } from '@/components/app-sidebar'
import { SidebarProvider } from '@/components/ui/sidebar'

export function AppLayout() {
  return (
    <SidebarProvider>
      <div className="flex h-screen overflow-hidden">
        <AppSidebar />
        <div className="h-screen w-screen flex-1 overflow-auto">
          <AppHeader />
          <Outlet />
        </div>
      </div>
    </SidebarProvider>
  )
}
