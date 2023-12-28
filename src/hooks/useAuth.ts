import { toast } from "sonner"

const useAuth = () => {
  const signOut = async () => {
    try {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_SERVER_URL}/api/users/logout`, {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        )

        if (!response.ok) throw new Error()

        toast.success('Signed out successfully')
    } catch (error) {
        toast.error("Couldn't sign out. Please try again.")
    }
  }
}

export default useAuth