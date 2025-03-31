import React from 'react'
import LinkItem from './LinkItem'
import { donateInfo } from '../../data/navData'

export default function DonateButton({footer=false}) {
  return (
    <LinkItem
      href={donateInfo.href}
      className={
        `${footer ? "p-5 py-3.5" : "md:ml-nav p-3 py-1"} 
         rounded-lg bg-primary hover:bg-primary-alt text-white font-semibold 
         transition inline-flex items-center justify-center`
      }
    >
      {footer ? donateInfo.altTitle :donateInfo.title}
    </LinkItem>  
  )
}
