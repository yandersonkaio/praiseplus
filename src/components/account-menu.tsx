import { ChevronDown, LogOutIcon, SettingsIcon, UserIcon } from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { getInitials } from '@/lib/string-utils'

import { Button } from './ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'

export function AccountMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="hover:bg-accent/50 flex items-center gap-2 transition-colors select-none"
        >
          <Avatar className="border-primary/20 h-7 w-7 rounded-full border-2">
            <AvatarImage
              src="https://lh3.googleusercontent.com/a/ACg8ocJp1a5PJeUoUfeq6JGxViwXZjoQ7VXEmuMhUZ6FdUAo31WC4mHnOA=s96-c"
              alt="Yanderson Kaio"
              className="transition-all hover:grayscale-0"
            />
            <AvatarFallback className="bg-primary/10 rounded-full">
              {getInitials('Yanderson Kaio')}
            </AvatarFallback>
          </Avatar>
          <ChevronDown className="text-muted-foreground h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="w-64 rounded-lg p-2 shadow-lg"
      >
        <DropdownMenuLabel className="flex items-center gap-3 p-3">
          <Avatar className="border-primary/10 h-10 w-10 rounded-lg border">
            <AvatarImage
              src="https://lh3.googleusercontent.com/a/ACg8ocJp1a5PJeUoUfeq6JGxViwXZjoQ7VXEmuMhUZ6FdUAo31WC4mHnOA=s96-c"
              alt="Yanderson Kaio"
            />
            <AvatarFallback className="bg-primary/10 rounded-lg">
              {getInitials('Yanderson Kaio')}
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col overflow-hidden">
            <span className="truncate font-semibold">Yanderson Kaio</span>
            <span className="text-muted-foreground truncate text-sm font-normal">
              yandersonkaio@email.com
            </span>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="my-1" />
        <DropdownMenuItem className="hover:bg-accent focus:bg-accent cursor-pointer rounded-md px-3 py-2 transition-colors">
          <UserIcon className="text-primary mr-2 h-4 w-4" />
          <span>Perfil</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="hover:bg-accent focus:bg-accent cursor-pointer rounded-md px-3 py-2 transition-colors">
          <SettingsIcon className="text-primary mr-2 h-4 w-4" />
          <span>Configurações</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator className="my-1" />
        <DropdownMenuItem className="hover:bg-destructive/10 focus:bg-destructive/10 text-destructive cursor-pointer rounded-md px-3 py-2 transition-colors">
          <LogOutIcon className="mr-2 h-4 w-4" />
          <span>Sair</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
