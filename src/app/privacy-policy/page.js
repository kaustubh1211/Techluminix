import DarkNavbar from '@/components/DarkNavbar'
import DarkFooter from '@/components/DarkTheem/DarkFooter'
import PrivacyPolicy from '@/components/PrivacyPolicy'
import React from 'react'

export const metadata = {
  "title": "Privacy Policy | TechLuminix",
  "description": "Learn how TechLuminix collects, uses, and protects your personal information. Our commitment to your privacy is paramount.",
  "keywords": ["TechLuminix Privacy Policy", "Data Protection", "User Privacy", "Information Security", "Personal Data"],
  "openGraph": {
    "title": "Privacy Policy | TechLuminix",
    "description": "Understand how TechLuminix handles your personal data and ensures its security.",
    "url": "https://techluminix.com/privacy-policy",
    "siteName": "TechLuminix",
    "images": [
      {
        "url": "https://techluminix.com/assets/logo.png",
        "width": 1200,
        "height": 630,
        "alt": "TechLuminix Privacy Policy"
      }
    ],
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Privacy Policy | TechLuminix",
    "description": "Discover how TechLuminix safeguards your personal information and privacy.",
    "images": ["https://techluminix.com/assets/logo.png"]
  }
};

export default function page() {
  return (
    <div className=' bg-black absolute w-full   '>

        <DarkNavbar/>
        <PrivacyPolicy/>
        <DarkFooter/>
    </div>
  )
}
