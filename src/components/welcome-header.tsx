import { Church } from 'lucide-react'

import { AccountMenu } from './account-menu'
import { ThemeToggle } from './theme/theme-toggle'

export function WelcomeHeader() {
  return (
    <header className="border-b">
      <div className="flex h-16 items-center gap-2 px-6">
        <Church className="h-4 w-4 sm:h-6 sm:w-6" />
        <span className="text-1xl font-semibold sm:text-2xl">Praise+</span>

        <div className="ml-auto flex items-center gap-2">
          <ThemeToggle />
          <AccountMenu />
        </div>
      </div>
    </header>
  )
}
