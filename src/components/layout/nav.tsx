import React, { FC } from 'react'
import Logo from './logo'
import Link from 'next/link';

interface NavProps {
  
}

const Nav: FC<NavProps> = ({  }) => {
  return (
    <header className='min-w-full h-6 bg-gray-900 flex flex-row place-self-center pt-0 pr-10'>
        <div className='flex-1'>
            <Link legacyBehavior href="/">
                <a className='text-gray-100 hover:text-gray-200 active:text-gray-200'><Logo /></a>
            </Link>
        </div>
        <div className='flex-grow self-end'>
            <nav>
                <ul className="list-none flex  m-0 p-0 sm:gap-0.5">
                    <li className='flex-auto '><Link className='float-right' href="/posts">Posts</Link></li>
                    <li className='flex pl-3'><Link href="/contact">Contacts</Link></li>
                </ul>
            </nav>
        </div>
    </header>
  )
}

export default Nav;