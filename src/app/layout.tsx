import './globals.css'
import {  Poppins } from 'next/font/google'
import { Metadata } from 'next'

import Navbar from '../components/Navbar'
import { Providers } from '@/libs/store/Provider'

const poppins = Poppins({weight:['200','300','400','700','800'],subsets:['latin']});

export const metadata:Metadata = {
  title: 'Phol',
  description: 'A Web-Based Application created By Phol',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className={`${poppins.className} text-white bg-primaryColor overflow-y-auto`}>
        <Providers>
        <Navbar/>
        {children}
        </Providers>
      </body>
    </html>
  )
}
