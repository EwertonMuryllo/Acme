import type {Metadata } from 'next';
import { inter } from './ui/fonts.ts';
import React from 'react';

export const metadata: Metadata = {
  title: 'ACME' 
}

export default function RootLayout({children}: {children:React.ReactNode}) {
  return(
    <html lang='pt-BR'>
    <body className='{inter.classname}'>
     {children}  
              
    </body>
    </html>
  )
}