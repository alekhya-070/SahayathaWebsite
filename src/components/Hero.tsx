export default function Hero() {
  return (
    <section className="bg-softpurple py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold text-violet">Sahayatha Club</h1>
        <p className="mt-4 text-xl text-primary max-w-2xl mx-auto">
          Empowering our campus and community through meaningful initiatives, volunteer programs, and supportive drives.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <button className="bg-accent text-black font-semibold px-8 py-3 rounded-xl shadow-smooth hover:shadow-lg transition">
            Join Us
          </button>
          <button className="border-2 border-violet text-violet font-semibold px-8 py-3 rounded-xl hover:bg-violet hover:text-white transition">
            Donate Now
          </button>
        </div>
        <img
          src="/images/hero.webp"
          alt="Students volunteering"
          className="mt-12 w-full rounded-xl shadow-smooth"
        />
      </div>
    </section>
  )
}
