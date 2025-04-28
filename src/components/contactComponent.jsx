import React from 'react';
import { Phone, Mail, Building2 } from 'lucide-react';
import ContactBackground from '@/app/contact/ContactBackground';

const ContactComponent = () => {
  return (
    <div className="w-full bg-black text-white py-16 pt-40  relative   px-4">
      <div className="max-w-6xl mx-auto">
        <ContactBackground/>
        {/* Header Section */}
        <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-b from-white to-gray-400 text-transparent bg-clip-text">Contact Us Today</h1>          <p className="text-gray-400 text-lg">Contact us via email, phone, or form—we're here to help!</p>
        </div>
        
        {/* Contact Cards */}
        <div className="grid relative grid-cols-1 md:grid-cols-3 gap-6">
          {/* Phone Card */}
          <div className="bg-gray-900 rounded-lg p-8 text-center flex flex-col items-center">
            <div className="bg-gray-800 rounded-full p-6 mb-6">
              <Phone size={32} className="text-white" />
            </div>
            <h2 className="text-xl font-bold mb-2">+91 9226057563</h2>
            <p className="text-gray-400">Receive prompt assistance for urgent issues.</p>
          </div>
          
          {/* Email Card */}
          <div className="bg-gray-900 rounded-lg p-8 text-center flex flex-col items-center">
            <div className="bg-gray-800 rounded-full p-6 mb-6">
              <Mail size={32} className="text-white" />
            </div>
            <h2 className="text-xl font-bold mb-2">info@techluminix.com</h2>
            <p className="text-gray-400">Reach out to our team members</p>
          </div>
          
          {/* Address Card */}
          <div className="bg-gray-900 rounded-lg p-8 text-center flex flex-col items-center">
            <div className="bg-gray-800 rounded-full p-6 mb-6">
              <Building2 size={32} className="text-white" />
            </div>
            <h2 className="text-xl font-bold mb-2">Techluminix</h2>
            <p className="text-gray-400">Shop No.3, G.M Tower, Naringai Rd, Virar East, Virar, Mumbai</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactComponent;