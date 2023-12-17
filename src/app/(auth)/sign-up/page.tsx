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

const Page = () => {
  const { 
    register, 
    handleSubmit, 
    formState: { errors },
  } =   useForm<AuthCredentialsValidatorProps>({
    resolver: zodResolver(AuthCredentialsValidator),
  }) 

  const { data } = trpc.anyApiRoute.useQuery()
  
  const onSubmit = ({
    email, 
    password,
  }: AuthCredentialsValidatorProps) => {
    // send data to server
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
                        className={cn({
                          'focus-visible:ring-red-500': true
                        })}
                        placeholder='name@example.com'
                      />
                    </div>

                    <div className='grid gap-y-2'>
                      <Label htmlFor='password'>PASSWORD</Label>
                      <Input
                        className={cn({
                          'focus-visible:ring-red-500': true
                        })}
                        placeholder='password example'
                      />
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