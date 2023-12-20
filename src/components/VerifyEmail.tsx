'use client'

import { trpc } from "@/trpc/client"

interface VerifyEmailProps {
  token: string,
}

const VerifyEmail = ({ token }: VerifyEmailProps) => {
  const {
    data,
    isLoading,
    isError,
  } = trpc.auth.verifyEmail.useQuery({
    token,
  })

  return (
    <div>Verify Email</div>
  )
}

export default VerifyEmail