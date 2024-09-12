import React from 'react'
import { defineOneEntry } from 'oneentry'
import Link from 'next/link';
    
const { Menus } = defineOneEntry('https://sahandestate2.oneentry.cloud', {
    token: process.env.NEXT_PUBLIC_ONEENTRY_TOKEN,
    userToken: '',
});
export default async function Header() {
    const menus = await Menus.getMenusByMarker('main');
    console.log(menus)
    return (
    <header className='bg-slate-200 shadow-md'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <Link href='/'>
            <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
                <span className='text-slate-500'>REAL</span>
                <span className='text-slate-700'>ESTATE</span>
            </h1>
        </Link>
        <ul className='flex gap-5'>
            {menus.pages.map((page) => (
                <Link
                    href={page.pageUrl === 'home' ? '/' : '/' + page.pageUrl}
                    key={page.locatizeInfos.id}
                >
                    <li className='text-xs md:text-base text-slate-700 hover:underline'>
                        {page.locatizeInfos}
                    </li>
                </Link>
            ))}
        </ul>
      </div>
    </header>
  )
}
