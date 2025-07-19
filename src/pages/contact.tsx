import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Contact() {
  const CLUB_CONTACTS = {
    instagram: 'https://www.instagram.com/sahayatha_club_vitc?igsh=MTNjdjVwZjh0OHI3ZQ==',
    gmail: 'sahayathaclub@gmail.com',
    linkedin: 'https://www.linkedin.com/company/sahayatha-club-vitc-sahayatha/?originalSubdomain=in',
  };
  return (
    <>
      <Navbar />
      <section className="bg-[#23262b] text-white py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-sm mb-2 text-gray-300">Home / Contact Us</div>
          <h1 className="text-5xl font-extrabold mb-2">How can we help?</h1>
        </div>
      </section>
      {/* Club Location Section */}
      <div className="bg-white w-full py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-4 text-violet">Visit Us</h2>
            <p className="mb-4 text-gray-700">Sahayatha Club, VIT Chennai<br/>Vandalur-Kelambakkam Road,<br/>Chennai, Tamil Nadu 600127</p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3912.123456789!2d80.136123!3d12.823456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5258e7b8b8b8b8%3A0x123456789abcdef!2sVIT%20Chennai!5e0!3m2!1sen!2sin!4v1621234567890!5m2!1sen!2sin"
              width="100%"
              height="220"
              style={{ border: 0, borderRadius: '16px' }}
              
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="VIT Chennai Location"
            ></iframe>
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-4 text-violet">Send Us a Message</h2>
            <div className="bg-gray-50 rounded-xl p-6 shadow-smooth">
              <p className="mb-4 text-gray-700">Have a question or want to get involved? Fill out the form below and we'll get back to you soon!</p>
              {/* Placeholder for future contact form */}
              <form className="flex flex-col gap-4">
                <input type="text" placeholder="Your Name" className="border rounded-lg px-4 py-2" disabled />
                <input type="email" placeholder="Your Email" className="border rounded-lg px-4 py-2" disabled />
                <textarea placeholder="Your Message" className="border rounded-lg px-4 py-2" rows={4} disabled></textarea>
                <button type="submit" className="px-6 py-3 rounded-xl font-bold bg-accent text-black opacity-60 cursor-not-allowed" disabled>Send Message (Coming Soon)</button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Meet Our Team section removed as requested */}
      {/* Contact Info Only */}
      <div className="bg-white w-full py-12 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="bg-[#23262b] text-white rounded-2xl shadow-smooth p-8 flex flex-col items-center justify-center">
            <h2 className="text-3xl font-extrabold mb-6 text-center">Contact Information</h2>
            <p className="mb-8 text-lg text-gray-200 text-center leading-relaxed">
              Interested in <span className="text-violet font-bold">volunteering</span> or <span className="text-violet font-bold">sponsoring</span> Sahayatha Club?<br/>
              We welcome passionate individuals and organizations to join us in making a difference.<br/>
              <span className="block mt-4 text-xl font-semibold text-white">You can reach out to us anytime via Gmail, LinkedIn, or Instagram!</span><br/>
              <span className="block mt-2 text-base text-gray-300">Whether you want to volunteer, collaborate, sponsor, or just learn more about our club, our team is always ready to connect and answer your queries.</span>
            </p>
            <div className="mb-4 flex flex-col gap-4 items-center text-lg">
              <div className="flex items-center gap-3"><span className="text-2xl">📧</span> <a href={`mailto:${CLUB_CONTACTS.gmail}`} className="text-blue-400 underline font-bold">{CLUB_CONTACTS.gmail}</a></div>
              <div className="flex items-center gap-3"><span className="text-2xl">📷</span> <a href={CLUB_CONTACTS.instagram} target="_blank" rel="noopener noreferrer" className="text-pink-400 underline font-bold">Instagram</a></div>
              <div className="flex items-center gap-3"><span className="text-2xl">💼</span> <a href={CLUB_CONTACTS.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-400 underline font-bold">LinkedIn</a></div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
