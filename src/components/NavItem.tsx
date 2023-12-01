'use client'

import { PRODUCT_CATEGORIES } from "@/config"
import { Button } from "./ui/button"
import { FaChevronDown } from "react-icons/fa6"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import MaxWidthWrapper from "./MaxWidthWrapper"

type Category = (typeof PRODUCT_CATEGORIES)[number]

interface NavItemProps {
    category: Category
    handleOpen: () => void
    isOpen: boolean
    isAnyOpen: boolean
}

const NavItem = ({category, handleOpen, isAnyOpen, isOpen}: NavItemProps) => {
  return (
    <div className="flex">
        <div className="relative flex items-center">
            <Button 
                className="gap-1.5"
                onClick={handleOpen}
                variant={isOpen ? 'secondary' : 'ghost'}
            >
                {category.label}
                <FaChevronDown className={cn(
                    'h-3 w-auto transition-all text-muted-foreground',
                    {
                        '-rotate-180': isOpen,
                    }
                )} />
            </Button>
        </div>

        {isOpen ? (
            <div className={cn(
                'absolute inset-x-0 top-full text-sm text-muted-foreground', 
                {
                    'animate-in fade-in-10 slide-in-from-top-5': !isAnyOpen,
                }
            )}>
                <MaxWidthWrapper>
                    <div 
                        className="absolute inset-0 top-1/2 bg-white shadow"
                        aria-hidden='true' 
                        />

                    <div className="relative bg-white">
                        <div className="col-span-3 col-start-1 grid grid-cols-3 gap-x-12 py-6">
                            {category.featured.map((item) => (
                                <div
                                key={item.name}
                                className="group relative flex items-center text-base"
                                >
                                    <div className="relative aspect-square overflow-hidden rounded-lg w-16 h-auto group-hover:opacity-75">
                                        <Image
                                            src={item.imageSrc}
                                            alt="Product Category Image"
                                            fill
                                            className="object-cover object-center"
                                            />
                                    </div>

                                    <Link
                                        href={item.href}
                                        className="px-4 block font-medium text-gray-900"
                                        >
                                        {item.name}
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </MaxWidthWrapper>
            </div>
        ) : null}
    </div>
  )
}

export default NavItem