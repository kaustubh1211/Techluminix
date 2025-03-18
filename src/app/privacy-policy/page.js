import DarkNavbar from '@/components/DarkNavbar'
import DarkFooter from '@/components/DarkTheem/DarkFooter'
import PrivacyPolicy from '@/components/PrivacyPolicy'
import React from 'react'

export default function page() {
  return (
    <div className=' bg-black absolute w-full   '>

        <DarkNavbar/>
        <PrivacyPolicy/>
        <DarkFooter/>
    </div>
  )
}
