import React from 'react'
import { defineOneEntry } from 'oneentry'
import Link from 'next/link';
    
const { Menus } = defineOneEntry('https://sahandestate2.oneentry.cloud', {
    token: process.env.NEXT_PUBLIC_ONEENTRY_TOKEN,
    userToken: '',
});
export default async function Header() {
    const menus = await Menus.getMenusByMarker('main');
    return (
    <header className='bg-slate-200 shadow-md'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <Link href='/'>
            <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>REAL</h1>
        </Link>
      </div>
    </header>
  )
}
