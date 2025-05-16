import DarkNavbar from '@/components/DarkNavbar'
import DarkFooter from '@/components/DarkTheem/DarkFooter'
import TermsAndConditions from '@/components/TermAndCondition'
import React from 'react'

export const metadata = {
  "title": "Terms & Conditions | TechLuminix",
  "description": "Review the terms and conditions governing the use of TechLuminix's website and services. Understand your rights and responsibilities when engaging with our platform.",
  "keywords": ["TechLuminix Terms", "Terms and Conditions", "User Agreement", "Service Terms", "TechLuminix Policies"],
  "openGraph": {
    "title": "Terms & Conditions | TechLuminix",
    "description": "Understand the rules and regulations for using TechLuminix's services and website.",
    "url": "https://techluminix.com/term-conditions",
    "siteName": "TechLuminix",
    "images": [
      {
        "url": "https://techluminix.com/assets/logo.png",
        "width": 1200,
        "height": 630,
        "alt": "TechLuminix Terms and Conditions"
      }
    ],
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Terms & Conditions | TechLuminix",
    "description": "Familiarize yourself with the terms and conditions for using TechLuminix's services.",
    "images": ["https://techluminix.com/assets/logo.png"]
  }
};

export default function page() {
  return (
    <div className='bg-black absolute w-full'>

        <DarkNavbar/>
        <TermsAndConditions/>
        <DarkFooter/>
    </div>
  )
}
