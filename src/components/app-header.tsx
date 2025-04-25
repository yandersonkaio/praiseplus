import { useLocation } from 'react-router'

import { Separator } from '@/components/ui/separator'
import { SidebarTrigger } from '@/components/ui/sidebar'

import { ThemeToggle } from './theme/theme-toggle'

const pageTitles: Record<string, string> = {
  '/': 'Dashboard',
  '/finance': 'Finanças',
  '/membership-fee': 'Mensalidades',
  '/settings': 'Configurações',
}

export function AppHeader() {
  const location = useLocation()

  const currentTitle = pageTitles[location.pathname] || ''

  return (
    <header className="flex h-12 shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-4"
        />
        <h1 className="text-base font-medium">{currentTitle}</h1>
      </div>
      <div className="mr-4">
        <ThemeToggle />
      </div>
    </header>
  )
}
