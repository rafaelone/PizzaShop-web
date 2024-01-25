'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const signUpForm = z.object({
  restaurantName: z.string(),
  managerName: z.string(),
  phone: z.string(),
  email: z.string().email(),
})

type SignUpForm = z.infer<typeof signUpForm>

export function SignUpForm() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignUpForm>()
  const router = useRouter()
  async function handleSignIn(data: SignUpForm) {
    try {
      console.log(data)
      await new Promise((resolve) => setTimeout(resolve, 2000))

      toast.success('Restaurante cadastrado com sucesso', {
        action: {
          label: 'Login',
          onClick: () => {
            router.push('/sign-in')
          },
        },
      })
    } catch (err) {
      toast.success('Credenciais inválidas')
    }
  }

  return (
    <form className="space-y-2 " onSubmit={handleSubmit(handleSignIn)}>
      <div className="space-y-2">
        <Label htmlFor="restaurantName">Nome do estabelecimento</Label>
        <Input
          id="restaurantName"
          type="text"
          {...register('restaurantName')}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="managerName">Seu nome</Label>
        <Input id="managerName" type="text" {...register('managerName')} />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Seu e-mail</Label>
        <Input id="email" type="email" {...register('email')} />
      </div>
      <div className="space-y-2">
        <Label htmlFor="phone">Seu celular</Label>
        <Input id="phone" type="tel" {...register('phone')} />
      </div>
      <Button type="submit" className="w-full" disabled={isSubmitting}>
        Finalizar cadastro
      </Button>
      <p className="px-6 text-center text-sm leading-relaxed text-muted-foreground">
        Ao continuar, você concorda com nossos{' '}
        <Link href="#" className="underline underline-offset-4">
          {' '}
          termos de serviço{' '}
        </Link>{' '}
        e{' '}
        <Link href="#" className="underline underline-offset-4">
          políticas de privacidade.
        </Link>
      </p>
    </form>
  )
}
