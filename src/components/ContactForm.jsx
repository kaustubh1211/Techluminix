"use client"
import React, { useState } from 'react';
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

    if (typeof window === 'undefined' || !window.grecaptcha) {
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
            mobile: formData.mobile,
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
            });

            if (!res.ok) {
              console.error('HTTP error:', res.status);
              setStatus(`❌ Server returned status ${res.status}`);
              return;
            }

            const json = await res.json() // your PHP returns JSON
            if (json.status === 'success') {
              setStatus('✅ ' + (json.message || 'Message Sent Successfully!'));
              setFormData({ name: '', email: '', mobile: '', subject: '', message: '' });
            } else {
              console.error('Server error:', json);
              setStatus('❌ ' + (json.message || 'Error Sending Message.'));
            }            
          } catch (err) {
            console.error(err)
            setStatus('❌ Network Error.')
          }
        })
    })
  }
  return (
    <div className="bg-black text-white min-h-screen p-4 ">
    
    <Script
      src="https://www.google.com/recaptcha/api.js?render=6LeIdw4qAAAAAJOwjBqnSsOuwHPq9Lb8lvFTuWaP"
      strategy="lazyOnload" />

    <div className="max-w-7xl mx-auto pt-8 pb-16   ">
      {/* Contact us button */}
      <div className="mb-12 flex flex-col md:flex-row items-center">
        <button className="border   border-blue-500 text-blue-500 px-6 py-2 rounded-full hover:bg-blue-500 hover:text-white transition-colors">
          Contact us
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-12  ">
        {/* Left side content */}
        <div className="w-full lg:w-1/2 pr-0 lg:pr-8 ">
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-center md:text-left font-bold mb-4 bg-gradient-to-b from-white to-gray-400 text-transparent bg-clip-text">
            Contact Us Today
          </h1>
          <p className="text-gray-400 text-lg mb-8 text-center md:text-left">
            For any inquiries or support, reach out to us via email, phone, or our contact form. We're here to help!
          </p>

          {/* Map */}
          <div className="h-[35rem] w-full rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d488.67140736329566!2d72.8132893529963!3d19.468895027351056!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7a9036d68a97d%3A0xd322b144071ee820!2sTechLuminix%20Private%20Limited!5e0!3m2!1sen!2sin!4v1742296722775!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="TechLuminix Office Location"
            ></iframe>
          </div>
        </div>

        {/* Right side form */}
        <div className="w-full lg:w-1/2">
          <div className="bg-gray-900 rounded-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full p-4 bg-black text-white rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="yourmail@techluminix.com"
                  className="w-full p-4 bg-black text-white rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="mobile" className="block text-sm font-medium mb-2">
                  Mobile
                </label>
                <input
                  id="mobile"
                  type="number"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="9876543210"
                  className="w-full p-4 bg-black text-white rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                ></input>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Your Subject"
                  className="w-full p-4 bg-black text-white rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                ></input>
              </div>
              <div>
                <label htmlFor="mobile" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Share your query"
                  rows={3}
                  className="w-full p-4 bg-black text-white rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                ></textarea>
              </div>

              {status && <p className="text-blue-400">{status}</p>}
              
              <button
                type="submit"
                className="w-full py-4 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-md transition-colors duration-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default ContactUs;