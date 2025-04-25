import { Church } from 'lucide-react'
import { Outlet } from 'react-router'

export function AuthLayout() {
  return (
    <div className="grid min-h-screen grid-cols-1 md:grid-cols-2">
      <div className="border-foreground/5 bg-muted text-muted-foreground hidden h-full flex-col justify-between border-r p-4 sm:p-6 md:flex md:p-10">
        <div className="text-foreground flex items-center gap-2 text-base sm:text-lg">
          <Church className="h-4 w-4 sm:h-5 sm:w-5" />
          <span className="font-semibold">Praise+</span>
        </div>
        <footer className="text-xs sm:text-sm">
          Copyright © {new Date().getFullYear()} Praise+
        </footer>
      </div>
      <div className="flex flex-col items-center justify-center p-4 sm:p-6">
        <Outlet />
      </div>
    </div>
  )
}
