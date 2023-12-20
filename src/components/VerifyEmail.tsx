'use client'

import { trpc } from "@/trpc/client"
import { FaCircleXmark } from "react-icons/fa6"

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
      <div className="flex flex-col items-center gap-2">
        <FaCircleXmark className="h-8 w-8 text-red-600"/>
        <h3>We encounter an error</h3>
        <p className="text-sm">This token has expired or is not valid!</p>
      </div>
    )
  }
}

export default VerifyEmail