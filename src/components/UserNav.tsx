'use client'

import { Button } from "./ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "./ui/dropdown-menu"

const UserNav = () => {
  return (
    <DropdownMenu>
        <DropdownMenuTrigger
            className="overflow-visible"
            asChild
        >
            <Button
                className="relative"
                variant="ghost"
            >
                My Account
            </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent
            className="bg-white w-60"
            align="end"
        >
            <div className="flex items-center justify-start gap-2 p-2">
                <div className="flex flex-col space-y-0.5 leading-none">
                    <p className="font-medium text-sm text-black">
                        Username
                    </p>
                </div>
            </div>
        </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default UserNav