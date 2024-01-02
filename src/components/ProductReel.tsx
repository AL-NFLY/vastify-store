import React from 'react'

interface ProductReelProps {
    title: string
    subtitle?: string
    href?: string
}

const ProductReel = (props: ProductReelProps) => {
  return (
    <section className='py-12'>
        <div className='md:flex md:items-center md:justify-between mb-4'>
            <div className='max-w-2xl lg:max-w-4xl px-4 lg:px-0'>
                Title
            </div>
        </div>
    </section>
  )
}

export default ProductReel