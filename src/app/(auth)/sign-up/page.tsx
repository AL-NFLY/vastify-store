'use client'

import Navbar from '@/components/Navbar'
import { Button, buttonVariants } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from 'next/link'
import React from 'react'
import { AuthCredentialsValidator, AuthCredentialsValidatorProps } from '@/lib/validators/AuthCredentialsValidator'
import { trpc } from '@/trpc/client'
import { toast } from 'sonner'
import { ZodError } from 'zod'
import { useRouter } from 'next/navigation'

const Page = () => {
  const { 
    register, 
    handleSubmit, 
    formState: { errors },
  } =   useForm<AuthCredentialsValidatorProps>({
    resolver: zodResolver(AuthCredentialsValidator),
  }) 

  const router = useRouter()

  const { 
    mutate, 
    isLoading 
  } = trpc.auth.createPayloadUser.useMutation({
    onError: (error) => {
      // Used email error
      if (error.data?.code === 'CONFLICT') {
        toast.error('This email is already in use. Sign in instead?')

        return
      }

      // Password error
      if (error instanceof ZodError) {
        toast.error(error.issues[0].message)
        
        return
      }
      // Generic error
      toast.error(
        'Something went wrong. Please try again.'
      )
    },

    onSuccess: ({ sentToEmail }) => {
      toast.success(`Verification sent to ${sentToEmail}`)
      router.push('/verify-email?to=' + sentToEmail)
    }
  })

  const onSubmit = ({
    email, 
    password,
  }: AuthCredentialsValidatorProps) => {
    // send data to server
    mutate({ 
      email, 
      password
    })
  }

  return (
    <div className='container relative flex flex-col items-center justify-center h-[calc(100vh-72px)] lg:px-0'>
        <div className='flex flex-col mx-auto w-full sm:w-80 justify-center space-y-6'>
            <div className='flex flex-col items-center space-y-2 text-center'>
                <h2 className='text-2xl font-semibold'>NEW CLIENT</h2>
                <p className='text-slate-600'>Create a brand new account</p>

            </div>

            <div className='grid gap-6'>
              <form 
                onSubmit={handleSubmit(onSubmit)}
              >
                  <div className='grid gap-y-6'>
                    <div className='grid gap-y-2'>
                      <Label htmlFor='email'>EMAIL</Label>
                      <Input
                        id='email'
                        {...register('email')}
                        className={cn({
                          'focus-visible:ring-red-500': errors.email,
                        })}
                        placeholder='name@example.com'
                      />
                      {errors?.email && (
                        <p className='text-sm text-red-500'>
                          {errors.email.message}
                        </p>
                      )}
                    </div>

                    <div className='grid gap-y-2'>
                      <Label htmlFor='password'>PASSWORD</Label>
                      <Input
                        id='password'
                        {...register('password')}
                        className={cn({
                          'focus-visible:ring-red-500': errors.password,
                        })}
                        type='password'
                        placeholder='password example'
                      />
                      {errors?.password && (
                        <p className='text-sm text-red-500'>
                          {errors.password.message}
                        </p>
                      )}
                    </div>

                    <Button>SIGN UP</Button>
                    
                    <Link
                      href='/sign-in'
                      className={buttonVariants({
                        variant: 'link',
                      })}
                    >
                      Already have an account?
                    </Link>
                  </div>
              </form>
            </div>
        </div>
    </div>
  )
}

export default Page