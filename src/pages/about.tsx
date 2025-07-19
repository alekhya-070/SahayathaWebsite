import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function About() {
  return (
    <>
      <Navbar />
      

      {/* Mission Section */}
      <section className="bg-[#23262b] text-white py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-sm mb-2 text-gray-300">Home / About Us</div>
          <h1 className="text-5xl font-extrabold mb-2">About Us</h1>
        </div>
      </section>
      <div className="bg-white w-full">
        <section className="py-12 px-6">
          <div className="max-w-6xl mx-auto">
            {/* Add your about us content here if needed */}
          </div>
        </section>
      </div>

      {/* Club History Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8"><span className="text-violet">Club</span> History</h2>
          <div className="relative">
            <div className="absolute left-1/2 top-0 h-full w-1 bg-accent -translate-x-1/2" />
            <div className="flex flex-col gap-12 relative z-10">
              {/* Timeline items - keep format, update content */}
              {[{year:'2023',name:'Vedic Math Workshop',desc:'Transformative workshop combining Vedic Mathematics, career guidance, and sports activities to foster academic, personal, and physical development among students.'},{year:'2023',name:'From Vedic Maths to Olympic Dreams',desc:'Interactive learning sessions, and sports activities, culminating in a grand prize distribution ceremony. It was a day of fun, growth, and inspiration for students of all ages.'},{year:'2024',name:'Code for a Cause',desc:'A coding event blending technical skill-building and social impact, with proceeds supporting education for underprivileged children.'},{year:'2024',name:'Battleground Blitz',desc:'A thrilling gaming competition that fostered camaraderie and teamwork among students.'},{year:'2024',name:'Vedic Math Workshop',desc:'An educational and recreational day for schoolchildren featuring interactive math sessions, quizzes, and sports activities.'},{year:'2024',name:'Trinity Games',desc:'A three-day sports event raising funds to educate underprivileged girls, showcasing athletic talent and community spirit.'},{year:'2024',name:'Daan Utsav',desc:'A donation drive encouraging students and staff to contribute books and stationery for underprivileged communities.'},{year:'2025',name:"Women's Day: Breaking Barriers",desc:'A special event with quizzes, fun activities, speeches, and discussions to break stigma and celebrate women. Organized to empower and inspire, fostering awareness and inclusivity.'},
].map((item,i)=>(
                <div key={item.year+item.name} className={`flex ${i%2===0?'justify-start':'justify-end'} items-center w-full relative`}>
                  <div className="w-1/2 text-right pr-8">
                    {i%2===0 && (
                      <>
                        <div className="text-violet font-bold mb-1">{item.year}</div>
                        <div className="font-bold mb-1">{item.name}</div>
                        <div className="text-gray-600 text-sm">{item.desc}</div>
                      </>
                    )}
                  </div>
                  <div className="w-1/2 text-left pl-8">
                    {i%2!==0 && (
                      <>
                        <div className="text-violet font-bold mb-1">{item.year}</div>
                        <div className="font-bold mb-1">{item.name}</div>
                        <div className="text-gray-600 text-sm">{item.desc}</div>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8"><span className="text-violet">Core</span> Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-smooth p-8 flex items-center gap-4">
              <div className="bg-accent rounded-full h-10 w-10 flex items-center justify-center font-bold text-primary">1</div>
              <div>
                <div className="font-bold mb-1">Empowerment</div>
                <div className="text-gray-600 text-sm">Belief in education as a tool to transform lives.</div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-smooth p-8 flex items-center gap-4">
              <div className="bg-accent rounded-full h-10 w-10 flex items-center justify-center font-bold text-primary">2</div>
              <div>
                <div className="font-bold mb-1">Community</div>
                <div className="text-gray-600 text-sm">Fostering collaboration and unity for meaningful impact.</div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-smooth p-8 flex items-center gap-4">
              <div className="bg-accent rounded-full h-10 w-10 flex items-center justify-center font-bold text-primary">3</div>
              <div>
                <div className="font-bold mb-1">Inclusivity</div>
                <div className="text-gray-600 text-sm">Ensuring equal opportunities for all talents.</div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-smooth p-8 flex items-center gap-4">
              <div className="bg-accent rounded-full h-10 w-10 flex items-center justify-center font-bold text-primary">4</div>
              <div>
                <div className="font-bold mb-1">Altruism</div>
                <div className="text-gray-600 text-sm">Commitment to giving back and supporting social causes.</div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-smooth p-8 flex items-center gap-4">
              <div className="bg-accent rounded-full h-10 w-10 flex items-center justify-center font-bold text-primary">5</div>
              <div>
                <div className="font-bold mb-1">Innovation</div>
                <div className="text-gray-600 text-sm">Creating unique, impactful, and engaging initiatives.</div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-smooth p-8 flex items-center gap-4">
              <div className="bg-accent rounded-full h-10 w-10 flex items-center justify-center font-bold text-primary">6</div>
              <div>
                <div className="font-bold mb-1">Integrity</div>
                <div className="text-gray-600 text-sm">Upholding fairness and professionalism in all actions.</div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-smooth p-8 flex items-center gap-4">
              <div className="bg-accent rounded-full h-10 w-10 flex items-center justify-center font-bold text-primary">7</div>
              <div>
                <div className="font-bold mb-1">Sustainability</div>
                <div className="text-gray-600 text-sm">Striving for long-term, scalable change.</div>
              </div>
            </div>
          </div>
        </div>
      </section>


      

      {/* FAQ Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8"><span className="text-violet">Frequently Asked Questions</span></h2>
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-smooth p-6">
              <div className="font-bold mb-2">What is Sahayatha Club and what do you do?</div>
              <div className="text-gray-700 text-sm">Sahayatha is a student-led social club and NGO that organizes events, fundraisers, and workshops to support the education of underprivileged girl children. All funds go towards their school fees, supplies, and personal development.</div>
            </div>
            <div className="bg-white rounded-xl shadow-smooth p-6">
              <div className="font-bold mb-2">Where does the money raised go?</div>
              <div className="text-gray-700 text-sm">100% of donations are used for tuition fees, study materials, and holistic support for girls from underserved communities. We maintain transparency by documenting every expense and beneficiary.</div>
            </div>
            <div className="bg-white rounded-xl shadow-smooth p-6">
              <div className="font-bold mb-2">How can I contribute or donate?</div>
              <div className="text-gray-700 text-sm">You can sponsor a child's education, donate via our secure payment gateway, or join our fundraising events. Visit the <span className="text-violet font-semibold">Contribute</span> section for details.</div>
            </div>
            <div className="bg-white rounded-xl shadow-smooth p-6">
              <div className="font-bold mb-2">Can I volunteer with Sahayatha?</div>
              <div className="text-gray-700 text-sm">Yes! We welcome volunteers for event planning, outreach, and teaching sessions. Email us to sign up as a volunteer.</div>
            </div>
            <div className="bg-white rounded-xl shadow-smooth p-6">
              <div className="font-bold mb-2">Do you partner with schools or other NGOs?</div>
              <div className="text-gray-700 text-sm">We collaborate with local schools and NGOs to identify genuine cases and ensure your support reaches the right children.</div>
            </div>
            <div className="bg-white rounded-xl shadow-smooth p-6">
              <div className="font-bold mb-2">How do I know my donation is making a difference?</div>
              <div className="text-gray-700 text-sm">We share stories, photos, and updates about the children we've helped and the impact we've made on our website and social media.</div>
            </div>
            <div className="bg-white rounded-xl shadow-smooth p-6">
              <div className="font-bold mb-2">What kind of workshops or events do you organize?</div>
              <div className="text-gray-700 text-sm">We host cultural fests, charity runs, mental health workshops, digital literacy sessions, and more to raise awareness and uplift the community.</div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
