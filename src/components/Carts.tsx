'use client'

import { FaCartShopping } from "react-icons/fa6"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet"

const Carts = () => {
  return (
    <Sheet>
        <SheetTrigger className="group flex justify-center">
            <FaCartShopping
                className=' h-4 w-auto flex-shrink-0 text-slate-900/75 group-hover:text-slate-900'
            />
            <span className="ml-1 text-sm font-medium text-slate-900/75 group-hover:text-slate-900">
                0
            </span>
        </SheetTrigger>

        <SheetContent className="flex w-full flex-col pr-0 md:max-w-lg">
            <SheetHeader className="space-y-2.5 pr-6">
                <SheetTitle>
                    Cart (0)
                </SheetTitle>
            </SheetHeader>
        </SheetContent>
    </Sheet>
  )
}

export default Carts