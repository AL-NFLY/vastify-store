import Link from "next/link"
import MaxWidthWrapper from "./MaxWidthWrapper"
import NavItems from "./NavItems"

const Navbar = () => {
  return (
    <header className="sticky z-50 top-0 inset-x-0 h-1/6">
        <nav className="relative bg-white">
            <MaxWidthWrapper>
                <div className="border-b border-gray-200">
                    <div className="flex h-16 items-center">

                    </div>

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
                </div>
            </MaxWidthWrapper>
        </nav>
    </header>
  )
}

export default Navbar