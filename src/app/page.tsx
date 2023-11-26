import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { Button, buttonVariants } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
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
  )
}
