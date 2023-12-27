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
import { useRouter, useSearchParams } from 'next/navigation'

const Page = () => {
  const searchParams = useSearchParams()
  const router = useRouter()
  const isSeller = searchParams.get('as') === 'seller'
  const origin = searchParams.get('origin') 

  const { 
    register, 
    handleSubmit, 
    formState: { errors },
  } =   useForm<AuthCredentialsValidatorProps>({
    resolver: zodResolver(AuthCredentialsValidator),
  }) 

  const { 
    mutate: signIn, 
    isLoading 
  } = trpc.auth.createPayloadUser.useMutation({
    onSuccess: () => {
        toast.success('Signed in successfully')
        router.refresh()

        // Send user back to prev url
        if (origin) {
            router.push(`/${origin}`)
            return
        }

        // Send user to seller url
        if (isSeller) {
            router.push('/sell')
            return
        }

        router.push('/')
    },

    onError: (error) => {
        if (error.data?.code === 'UNAUTHORIZED') {
            toast.error('Invalid email or password.')
        }
    }
  })

  const onSubmit = ({
    email, 
    password,
  }: AuthCredentialsValidatorProps) => {
    // send data to server
    signIn({ 
      email, 
      password
    })
  }

  return (
    <div className='container relative flex flex-col items-center justify-center h-[calc(100vh-72px)] lg:px-0'>
        <div className='flex flex-col mx-auto w-full sm:w-80 justify-center space-y-6'>
            <div className='flex flex-col items-center space-y-2 text-center'>
                <h2 className='text-2xl font-semibold'>REGISTERED CLIENT</h2>
                <p className='text-slate-600'>Login to your account</p>

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

                    <Button>SIGN IN</Button>
                    
                    <Link
                      href='/sign-up'
                      className={buttonVariants({
                        variant: 'link',
                      })}
                    >
                      Don&apos;t have an account?
                    </Link>
                  </div>
              </form>

              <div className='relative'>
                <div 
                    className='absolute flex inset-0 items-center'
                    aria-hidden='true'
                    >
                      <span className='w-full border-t' />
                </div>
                <div className='relative flex justify-center text-xs'>
                      <span className='bg-background p-2 text-slate-600'>OR</span>
                </div>

              </div>

              {isSeller ? (
                <Button>
                  Continue as Customer
                </Button>
              ) : (
                <Button>
                  Continue as Seller
                </Button>
              )}
            </div>
        </div>
    </div>
  )
}

export default Page