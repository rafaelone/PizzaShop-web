import { Metadata } from 'next'
import Link from 'next/link'

import { Button } from '@/components/ui/button'

import { SignUpForm } from './components/form'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Cadastro',
  }
}

export default function SignUp() {
  return (
    <div className="p-8">
      <Button asChild className="absolute right-8 top-8" variant="ghost">
        <Link href="sign-in">Fazer login</Link>
      </Button>
      <div className="flex w-[350px] flex-col justify-center gap-6">
        <div className="flex flex-col gap-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tighter">
            Criar conta grátis
          </h1>
          <p className="text-sm text-foreground">
            Seja um parceiro e comece suas vendas!
          </p>
        </div>
        <SignUpForm />
      </div>
    </div>
  )
}
