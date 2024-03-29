'use client'

import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const signInForm = z.object({
  email: z.string().email(),
})

type SignInForm = z.infer<typeof signInForm>

export function SignInForm() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignInForm>()

  async function handleSignIn(data: SignInForm) {
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))

      toast.success('Enviamos um link de autenticação para seu e-mail', {
        action: {
          label: 'Reenviar',
          onClick: () => {
            handleSignIn(data)
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
        <Label htmlFor="email">Seu e-mail</Label>
        <Input id="email" type="email" {...register('email')} />
      </div>
      <Button type="submit" className="w-full" disabled={isSubmitting}>
        Acessar painel
      </Button>
    </form>
  )
}
