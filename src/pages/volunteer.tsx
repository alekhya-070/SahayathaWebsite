import Navbar from '@/components/Navbar';

export default function Volunteer() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white text-gray-900 px-4 py-10">
        <section className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-blue-700">Become a Volunteer</h1>
          <p className="mt-4 text-gray-600">
            Looking to give back, gain experience, and work with a team of passionate changemakers? Join Sahayatha as a volunteer! We welcome students from all backgrounds who are committed to serving communities and making a tangible difference through action, not just intention.
          </p>
          <p className="mt-4 text-gray-600">
            Whether you're good at organizing events, designing posters, teaching kids, or just showing up when help is needed — we have a place for you. Fill out the form below, and we’ll get in touch with the next steps. Let’s build a better tomorrow, together.
          </p>
        </section>
      </main>
    </>
  );
}
