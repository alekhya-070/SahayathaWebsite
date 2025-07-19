import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <section className="relative h-[480px] flex items-center justify-center">
        <img src="/images/image 2.png" alt="Girl writing on board" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 flex flex-col items-start max-w-2xl px-8">
          <h1 className="text-5xl font-extrabold text-white mb-4">Sahayatha</h1>
          <p className="text-xl text-white mb-6">Empowering Education for Every Girl Child</p>
          {/* Removed Join Us and Donate Now buttons as per request */}
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <img src="/images/image 3.png" alt="Girls reading" className="rounded-xl w-full md:w-[340px] h-[260px] object-cover" />
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-2"><span className="text-violet">About</span> Sahayatha</h2>
            <p className="mb-6 text-gray-700">Sahayatha is a purpose-driven social club that is dedicated to supporting underprivileged girl children on their educational journey. The club's primary mission is to provide children from disadvantaged backgrounds with access to quality education. By doing so, Sahayatha aims to empower these young minds, bridge the educational gap, and create a brighter future.</p>
            <div className="flex gap-8 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold">50+</div>
                <div className="text-sm text-gray-600">Girls Supported</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">10+</div>
                <div className="text-sm text-gray-600">Events Organized</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">100+</div>
                <div className="text-sm text-gray-600">Volunteers Engaged</div>
              </div>
            </div>
              <a href="/about" className="px-6 py-3 rounded-xl font-bold bg-accent text-black hover:bg-accent/80 transition-all text-lg">Learn More</a>
          </div>
        </div>
      </section>

      {/* Featured Events Section */}
      <section className="py-20 px-6 bg-white">
        <h2 className="text-2xl font-bold text-center mb-8"><span className="text-violet">Featured</span> Events</h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col items-center">
            <img src="/images/image 22.png" alt="Vedic Math Workshop" className="rounded-xl w-full h-[220px] object-cover mb-4" />
            <h3 className="text-lg font-bold mb-2">Vedic Math Workshop</h3>
            <p className="text-gray-700 mb-4 text-center">Transformative workshop combining Vedic Mathematics, career guidance, and sports activities to foster academic, personal, and physical development among students.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="rounded-xl w-full h-[220px] bg-gray-100 flex items-center justify-center mb-4 border border-gray-300">
              <img src="/images/img123.png" alt="Code for a Cause" className="rounded-xl w-full h-[220px] object-cover mb-4" />
            </div>
            <h3 className="text-lg font-bold mb-2">Code for a Cause</h3>
            <p className="text-gray-700 mb-4 text-center">A coding event blending technical skill-building and social impact, with proceeds supporting education for underprivileged children.</p>
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <a href="#" className="px-6 py-3 rounded-xl font-bold bg-accent text-black hover:bg-accent/80 transition-all text-lg flex items-center gap-2">View More <span>&rarr;</span></a>
        </div>
      </section>

      {/* Upcoming Events Section */}


      {/* Contribute section removed as per request */}

      {/* Gallery Section */}
      <section className="py-20 px-6 bg-white">
        <h2 className="text-2xl font-bold text-center mb-2">Gallery</h2>
        <p className="text-center text-gray-600 mb-8">Our club in action</p>
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[9,10,11,12,13,14,15,16].map((i) => (
            <img key={i} src={`/images/image ${i}.png`} alt={`Gallery ${i}`} className="w-full h-40 object-cover rounded-xl" />
          ))}
        </div>
        <div className="flex justify-center">
          <a href="#" className="px-6 py-3 rounded-xl font-bold bg-accent text-black hover:bg-accent/80 transition-all text-lg flex items-center gap-2">View All <span>&rarr;</span></a>
        </div>
      </section>

      <Footer />
    </>
  )
}
