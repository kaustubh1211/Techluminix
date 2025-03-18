import DarkNavbar from '@/components/DarkNavbar'
import DarkFooter from '@/components/DarkTheem/DarkFooter'
import TermsAndConditions from '@/components/TermAndCondition'
import React from 'react'

export default function page() {
  return (
    <div className='bg-black absolute w-full'>

        <DarkNavbar/>
        <TermsAndConditions/>
        <DarkFooter/>
    </div>
  )
}
