import React from 'react'
import { defineOneEntry } from 'oneentry'

export default function Header() {
    
    const { Menus } = defineOneEntry('https://sahandestate2.oneentry.cloud', {
        token: process.env.NEXT_PUBLIC_ONEENTRY_TOKEN,
        userToken: '',
    }) 
    
    return (
    <div>
      Header
    </div>
  )
}
