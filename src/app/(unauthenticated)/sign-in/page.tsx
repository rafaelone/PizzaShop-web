import { Metadata } from 'next'
import Link from 'next/link'

import { Button } from '@/components/ui/button'

import { SignInForm } from './components/form'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Login',
  }
}

export default function SignIn() {
  return (
    <div className="p-8">
      <Button asChild className="absolute right-8 top-8" variant="ghost">
        <Link href="sign-up">Novo estabelecimento</Link>
      </Button>
      <div className="flex w-[350px] flex-col justify-center gap-6">
        <div className="flex flex-col gap-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tighter">
            Acessar Painel
          </h1>
          <p className="text-sm text-foreground">
            Acompanhe suas vendas pelo painel do parceiro!
          </p>
        </div>
        <SignInForm />
      </div>
    </div>
  )
}
