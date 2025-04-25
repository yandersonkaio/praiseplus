import { Church } from 'lucide-react'

import { Button } from '@/components/ui/button'

export function SignIn() {
  return (
    <div className="p-4 sm:p-6">
      <div className="mx-auto flex w-full max-w-[350px] flex-col justify-center gap-6">
        <div className="text-foreground mb-4 flex items-center justify-center gap-2 text-base sm:text-lg md:hidden">
          <Church className="h-8 w-8 sm:h-9 sm:w-9" />
          <span className="text-3xl font-semibold sm:text-4xl">Praise+</span>
        </div>
        <div className="flex flex-col gap-2 text-center">
          <h1 className="text-xl font-semibold tracking-tight sm:text-2xl">
            Acessar aplicação
          </h1>
          <p className="text-muted-foreground text-xs sm:text-sm">
            Gerencie ou participe de espaços através do painel!
          </p>
        </div>
        <Button variant="outline" className="w-full">
          <svg
            className="mr-2 h-4 w-4 sm:mr-5 sm:h-5 sm:w-5"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#EA4335"
              d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
            />
            <path
              fill="#4285F4"
              d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
            />
            <path
              fill="#FBBC05"
              d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.28-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6z"
            />
            <path
              fill="#34A853"
              d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
            />
            <path fill="none" d="M0 0h48v48H0z" />
          </svg>
          Entrar com Google
        </Button>
      </div>
    </div>
  )
}
