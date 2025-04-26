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
    <header className="bg-background sticky top-0 flex h-16 shrink-0 items-center gap-2 border-b px-4">
      <div className="flex w-full items-center gap-1 px-4">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mr-2 h-4" />
        <h1 className="text-base font-medium">{currentTitle}</h1>
      </div>
      <div className="mr-4">
        <ThemeToggle />
      </div>
    </header>
  )
}
