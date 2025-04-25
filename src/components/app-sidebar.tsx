import {
  ChartNoAxesCombined,
  ChevronsUpDown,
  CreditCard,
  LayoutDashboard,
  Settings,
} from 'lucide-react'
import { useState } from 'react'
import { NavLink, useLocation } from 'react-router'

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'

import { NavUser } from './nav-user'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'

const items = [
  {
    title: 'Dashboard',
    url: '/',
    icon: LayoutDashboard,
  },
  {
    title: 'Financias',
    url: '/finance',
    icon: ChartNoAxesCombined,
  },
  {
    title: 'Mensalidades',
    url: '/membership-fee',
    icon: CreditCard,
  },
  {
    title: 'Configurações',
    url: '/settings',
    icon: Settings,
  },
]

const spaces = [
  { id: '1', name: 'Grupo VDN' },
  { id: '2', name: 'Grupo shekinah' },
]

const user = {
  name: 'Yanderson Kaio',
  email: 'yandersonkaio@email.com',
  avatar:
    'https://lh3.googleusercontent.com/a/ACg8ocJ5O2sWYygMJqIBRccfgiE3eZ6UHmP_Eq0hETUGLATE0fIbiQ=s96-c',
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const location = useLocation()
  const currentPath = location.pathname
  const [selectedSpace, setSelectedSpace] = useState(spaces[0])

  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton className="w-full">
                  {selectedSpace.name}
                  <ChevronsUpDown className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-[var(--radix-dropdown-menu-trigger-width)]"
                align="start"
                sideOffset={0}
              >
                {spaces.map((space) => (
                  <DropdownMenuItem
                    key={space.id}
                    onClick={() => setSelectedSpace(space)}
                    className={selectedSpace.id === space.id ? 'bg-accent' : ''} // Destaca o item selecionado
                  >
                    <span>{space.name}</span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu className="flex h-full flex-col justify-center p-2">
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild isActive={currentPath === item.url}>
                <NavLink to={item.url}>
                  <item.icon />
                  <span>{item.title}</span>
                </NavLink>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={user} />
      </SidebarFooter>
    </Sidebar>
  )
}
