'use client'

import { Button } from "./ui/button"
import { DropdownMenu, DropdownMenuTrigger } from "./ui/dropdown-menu"

const UserNav = () => {
  return (
    <DropdownMenu>
        <DropdownMenuTrigger
            className="overflow-visible"
            asChild
        >
            <Button>My Account</Button>
        </DropdownMenuTrigger>
    </DropdownMenu>
  )
}

export default UserNav