import { Key, LayoutDashboard, Plus, Users } from 'lucide-react'

import { Button } from '@/components/ui/button'

export function Welcome() {
  return (
    <div className="bg-background flex h-full w-full flex-col items-center justify-center gap-8 p-8 sm:p-8">
      <div className="flex flex-col items-center gap-4 text-center">
        <div className="bg-primary/10 dark:bg-primary/20 rounded-full p-4">
          <LayoutDashboard className="text-primary h-10 w-10" />
        </div>
        <h1 className="text-2xl font-bold tracking-tight">
          Bem-vindo ao seu painel!
        </h1>
        <p className="text-muted-foreground text-md max-w-md">
          Você ainda não participa de nenhum espaço. Crie um novo ou entre em um
          existente para começar.
        </p>
      </div>

      <div className="flex w-full max-w-xs flex-col gap-4">
        <Button className="gap-2 text-sm" variant="default">
          <Plus className="h-5 w-5" />
          Criar novo espaço
        </Button>
        <Button className="gap-2 text-sm" variant="outline">
          <Key className="h-5 w-5" />
          Entrar em espaço existente
        </Button>
      </div>

      <div className="text-muted-foreground mt-8 flex items-center gap-2 text-sm">
        <Users className="h-4 w-4" />
        <span>Conecte-se com sua equipe e colabore</span>
      </div>
    </div>
  )
}
