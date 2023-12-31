import Link from 'next/link'
import React from 'react'

interface ProductReelProps {
    title: string
    subtitle?: string
    href?: string
}

const ProductReel = (props: ProductReelProps) => {
  const { title, subtitle, href } = props
  
  return (
    <section className='py-12'>
        <div className='md:flex md:items-center md:justify-between mb-4'>
            <div className='max-w-2xl lg:max-w-4xl px-4 lg:px-0'>
                {title ? (
                    <h1 className='text-2xl md:text-3xl font-bold text-slate-900'>
                        {title}
                    </h1>
                ) : null}
                {subtitle ? (
                    <p className='mt-2 text-sm text-slate-600'>
                        {subtitle}
                    </p>
                ) : null}
                {href ? (
                    <Link
                        href={href}
                    >
                        View our collection
                    </Link>
                ) : null
                }
            </div>
        </div>
    </section>
  )
}

export default ProductReel