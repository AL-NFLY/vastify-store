'use client'

import { FaCartShopping } from "react-icons/fa6"
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet"
import { Separator } from "./ui/separator"
import { formatPrice } from "@/lib/utils"
import Link from "next/link"
import { buttonVariants } from "./ui/button"

const Carts = () => {
  const itemCount = 1
  const transactionFee = 1

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

                {itemCount > 0 ? (
                    <>
                        <div className="flex w-full flex-col pr-6">
                            {/* TODO: Cart Logic */}
                            Cart Items
                        </div>
                        <div className="pr-6 space-y-4">
                            <Separator />
                            <div className="text-sm space-y-1.5">
                                <div className="flex">
                                    <span className="flex-1">Shipping</span>
                                    <span>Free</span>
                                </div>

                                <div className="flex">
                                    <span className="flex-1">Transaction Fee</span>
                                    <span>{formatPrice(transactionFee)}</span>
                                </div>

                                <div className="flex">
                                    <span className="flex-1">Total</span>
                                    <span>{formatPrice(transactionFee)}</span>
                                </div>
                            </div>

                            <SheetFooter>
                                <SheetTrigger asChild>
                                    <Link
                                        href='/cart'
                                        className={buttonVariants({
                                            className: 'w-full',
                                        })}
                                    >
                                        Check out
                                    </Link>
                                </SheetTrigger>
                            </SheetFooter>
                        </div>
                    </>
                ) : (
                    <></>
                )}
            </SheetHeader>
        </SheetContent>
    </Sheet>
  )
}

export default Carts