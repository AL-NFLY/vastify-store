import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { Button, buttonVariants } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import { IconType } from "react-icons";
import { FaHandHoldingDollar, FaTruck, FaShield } from "react-icons/fa6";

interface PerksProps {
  name: string,
  icon: IconType,
  description: string,

}

const perks: PerksProps[] = [
  {
    name: 'Free sample',
    icon: FaHandHoldingDollar,
    description: 'Each order above $250 will recieve a complementary sample.',
  },
  {
    name: 'Free shipping',
    icon: FaTruck,
    description: 'Enjoy seamless shopping with our lightning-fast shipping service.',
  },
  {
    name: 'Secure Payment',
    icon: FaShield,
    description: 'Experience worry-free transactions with our secure payment options.',
  },
]

export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <div className='py-20 mx-auto flex flex-col text-center items-center max-w-3xl'>
          <h1 className='text-3xl md:text-4xl font-bold'>Vastify Store</h1>
          <p className='text-3xl md:text-4xl font-semibold tracking-tight text-slate-900'>Your one stop store solution for {' '}
            <span className='text-primary'>fragrances</span>.
          </p>
          <p className='mt-6 text-lg max-w-prose text-muted-foreground'>
            Welcome to Vastify Store. Every asset on our platform is verified by our team to ensure our highest quality standards.
          </p>

          <div className='flex flex-col md:flex-row mt-6 gap-4'>
            <Link
              href='/products'
              className={buttonVariants()}
              >
            Browse Trending
            </Link>

            <Button variant='ghost'>
              Our quality promise &rarr;
            </Button>
          </div>
        </div>
      </MaxWidthWrapper>

      <section className='border-t border-gray-200 bg-gray-50'>
        <MaxWidthWrapper className='py-20'>
          <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 lg:gap-y-0 md:gap-x-6 lg:gap-x-8'>
            {perks.map((perk) => (
              <li
                key={perk.name}
                className='md:flex lg:block md:items-start text-center md:text-left lg:text-center'
              >
                <div className='flex justify-center md:flex-shrink-0'>
                  <div className='h-16 w-16 flex items-center justify-center rounded-full bg-rose-100 text-rose-900'>
                    {<perk.icon className='w-1/2 h-1/2' />}
                  </div>
                </div>

                <div className='mt-6 md:mt-0 lg:mt-6 md:ml-4 lg:ml-0'>
                  <h3 className='font-medium text-gray-900'>
                    {perk.name}
                  </h3>
                  <p className='mt-2 text-sm text-muted-foreground'>
                    {perk.description}
                  </p>
                </div>
              </li>
            ) )}
          </ul>  
        </MaxWidthWrapper>
      </section>
    </>
  )
}
