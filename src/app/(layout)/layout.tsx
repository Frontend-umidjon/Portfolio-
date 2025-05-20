
import { HeaderDeck } from '@/components/Header'
import { NavbarDemo } from '@/components/Navbar'
import Head from 'next/head'
import React from 'react'

const MainLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <div>
        <HeaderDeck />
        <NavbarDemo/>
        {children}
    </div>
  )
}

export default MainLayout