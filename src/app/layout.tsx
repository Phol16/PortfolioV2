import './globals.css'
import {  Rubik, Lato } from 'next/font/google'
import { Metadata } from 'next'

import Navbar from '@/components/Navbar'
import { Providers } from '@/libs/store/Provider'
import Footer from '@/components/Footer'

const font = Rubik({weight:['300','400','500','700','800'],subsets:['latin']});

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
      <body className={`${font.className} text-white bg-primaryColor overflow-y-auto`}>
        <Providers>
        <Navbar/>
        {children}
        <Footer/>
        </Providers>
      </body>
    </html>
  )
}
