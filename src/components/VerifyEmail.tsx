'use client'

import { trpc } from "@/trpc/client"

interface VerifyEmailProps {
  token: string,
}

const VerifyEmail = ({ token }: VerifyEmailProps) => {


  return (
    <div>Verify Email</div>
  )
}

export default VerifyEmail