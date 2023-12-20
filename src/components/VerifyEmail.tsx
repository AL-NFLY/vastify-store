'use client'

import { trpc } from "@/trpc/client"
import { FaCircleCheck, FaCircleXmark } from "react-icons/fa6"

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

  if (isError) {
    return (
      <div className="flex flex-col items-center gap-y-2">
        <FaCircleXmark className="h-9 w-9 text-red-600"/>
        <h2 className="mt-2 text-2xl font-semibold">WE ENCOUNTERED AN ERROR</h2>
        <p className="text-sm">This token has expired or is not valid!</p>
      </div>
    )
  }

  if (data?.success) {
    return (
      <div className="flex flex-col items-center justify-center gap-y-2">
        <FaCircleCheck className="h-9 w-9 text-green-600" />
        <h2 className="mt-2 text-2xl font-semibold">EMAIL VERIFIED</h2>
        <p className="text-slate-600">Thank you for verifying your email.</p>
      </div>
    )
  }
}

export default VerifyEmail