
import React from 'react'
import Sidebar from '@/components/shared/Sidebar'
import { Toaster } from '@/components/ui/toaster'
import MobileNav from '@/components/shared/MobileNav'

// layout for all the page 
const Layout = ({ children }: {children: React.ReactNode}) => {
  return (
    <main className='root'>
       <Sidebar />
       <MobileNav />

       <div className='root-container'>
        <div className='wrapper'>
            {children}
        </div>
       </div>

       <Toaster />
    </main>
  )
}

export default Layout