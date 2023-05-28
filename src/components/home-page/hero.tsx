import Image from 'next/image'
import React, { FC } from 'react'

interface HeroProps {
  
}

export const Hero: FC<HeroProps> = ({  }) => {
  return (
    <section className="flex flex-col sm:flex-row md:p-10 sm:p-2">
        <section className="place-self-center md:place-self-start flex-wrap">
            <Image src="/images/site/blogger10.jpg" className="place-self-center rounded-full object-none object-[59%_-4px]"  alt="Image of Author" width={100} height={100}></Image>
        </section>
        <section className=" place-self-center md:place-self-start flex-auto flex-grow">
            <div className="place-self-start p-10">
                <h1 className='mb-0 text-5xl font-bold'>Hi, I am Bestc0der</h1>
                <p className="pt-10">I blog about development using Microsoft/Javascript stacks</p>
            </div>
        </section>
    </section>
  )
}

export default Hero