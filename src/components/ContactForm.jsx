"use client"
import React, { useState , useEffect} from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import Script from 'next/script';

const ContactUs = () => {
  const [formData, setFormData] = useState({
  
    name: '',
    email: '',
    mobile: '',
    subject: '',
    message: '',
  });

  
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!window.grecaptcha) {
      setStatus('❌ reCAPTCHA not loaded')
      return
    }

    // 1) Get a fresh reCAPTCHA v3 token
    window.grecaptcha.ready(() => {
      window.grecaptcha
        .execute('6LeIdw4qAAAAAJOwjBqnSsOuwHPq9Lb8lvFTuWaP', { action: 'submit' })
        .then(async (token) => {
          // 2) Build the inner URL-encoded payload (your form fields + token)
          const inner = new URLSearchParams({
            'g-recaptcha-response': token,
            name: formData.name,
            email: formData.email,
            mobile: formData.phone,
            subject: formData.subject,
            message: formData.message
          }).toString()

          // 3) Wrap it exactly like your PHP expects: ssd=yes & data=<inner>
          const body = new URLSearchParams({
            ssd: 'yes',
            data: inner
          }).toString()

          try {
            const res = await fetch('https://techluminix.com/src/api/post.php', {
              method: 'POST',
              headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
              body
            })

            const json = await res.json() // your PHP returns JSON
            if (json.success) {
              setStatus('✅ Message Sent Successfully!')
              setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
            } else {
              console.error('Server error:', json)
              setStatus('❌ Error Sending Message.')
            }
          } catch (err) {
            console.error(err)
            setStatus('❌ Network Error.')
          }
        })
    })
  }

  return (
    <div className="bg-black  text-white mt-12">
      <Script
      src="https://www.google.com/recaptcha/api.js?render=6LeIdw4qAAAAAJOwjBqnSsOuwHPq9Lb8lvFTuWaP"
      strategy="beforeInteractive"
    />
      <div className="max-w-7xl mx-auto py-16 px-4 md:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-blue-500 mb-2">Contact us</p>
       
          <h2 className="text-3xl font-bold mb-3">Talk to us.</h2>
          <p className="text-gray-400 max-w-md mx-auto">
            Ready to grow your business online? Schedule a call with us or reach
            out below.
          </p>
        </div>
      
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Form Section */}
          <div className="w-full lg:w-1/2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-white mb-1"
                >
                  First name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Sunny"
                  className="w-full p-3 bg-gray-900 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-white mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="kharwarsunny@gmail.com"
                  className="w-full p-3 bg-gray-900 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-white mb-1"
                >
                  Phone number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="9999220403"
                  className="w-full p-3 bg-gray-900 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-white mb-1"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Inquiry"
                  className="w-full p-3 bg-gray-900 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-white mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Enter your message"
                  rows={6}
                  className="w-full p-3 bg-gray-900 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
              {status && <p className="mt-2">{status}</p>}
              <button
                type="submit"
                className="w-full py-3 px-4 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-md transition-colors duration-300"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Map and Contact Info Section */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            {/* Map */}
            <div className="h-64 md:h-96 bg-gray-900 rounded-lg overflow-hidden relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d488.67140736329566!2d72.8132893529963!3d19.468895027351056!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7a9036d68a97d%3A0xd322b144071ee820!2sTechLuminix%20Private%20Limited!5e0!3m2!1sen!2sin!4v1742296722775!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="TechLuminix Office Location"
                className="absolute inset-0"
              ></iframe>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;