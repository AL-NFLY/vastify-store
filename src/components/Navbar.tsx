import Link from "next/link"
import MaxWidthWrapper from "./MaxWidthWrapper"
import NavItems from "./NavItems"
import { buttonVariants } from "./ui/button"
import Carts from "./Carts"
import { getServerSideUser } from "@/lib/payload-utils"
import { cookies } from "next/headers";
import UserNav from "./UserNav"

const Navbar = async () => {
  const nextCookies = cookies()
  const { user } = await getServerSideUser(nextCookies)

  return (
    <header className="sticky z-50 top-0 inset-x-0 h-1/6">
        <nav className="relative bg-white">
            <MaxWidthWrapper>
                <div className="border-b border-gray-200 flex items-center justify-between p-3">
                    <div className="flex ml-4 lg:ml-0">
                        <Link
                            href='/'
                            className="bg-gradient-to-r from-primary to-rose-900 bg-clip-text text-transparent text-2xl font-bold tracking-tight"
                        >
                        VS
                        </Link>
                    </div>

                    <div className="hidden lg:block z-50 lg:ml-8 lg:self-stretch">
                        <NavItems />
                    </div>

                    <div className="ml-auto flex items-center">
                        <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                            {user ? null : (
                                <Link 
                                    href='/sign-in'
                                    className={buttonVariants({
                                        variant: 'ghost',
                                    })}
                                >
                                        SIGN IN
                                </Link>
                            )}

                            {user ? null : (
                                <span 
                                    aria-hidden='true'
                                    className="h-6 w-px bg-gray-200"
                                />
                            )}

                            {user ? (
                                <UserNav user={user} />
                            ) : (
                                <Link 
                                    href='/sign-up'
                                    className={buttonVariants({
                                        variant: 'ghost',
                                    })}
                                >
                                    SIGN UP
                                </Link>
                                )}

                            {user ? (
                                <span 
                                    aria-hidden='true'
                                    className="h-6 w-px bg-gray-200"
                                />
                            ) : null}

                            {user ? null : (
                                <div className="flex lg:ml-6">
                                    <span
                                        aria-hidden='true'
                                        className="h-6 w-px bg-gray-200"
                                    />
                                </div>
                            )}

                            <div className="flow-root ml-4 lg:ml-6">
                                <Carts />
                            </div>
                        </div>
                    </div>
                </div>
            </MaxWidthWrapper>
        </nav>
    </header>
  )
}

export default Navbar