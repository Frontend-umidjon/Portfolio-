
import { HeaderDeck } from '@/components/Header'
import Head from 'next/head'
import React from 'react'

const MainLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <div>
        <HeaderDeck />
        {children}
    </div>
  )
}

export default MainLayout