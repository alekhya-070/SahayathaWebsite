import Navbar from '@/components/Navbar';

export default function Donate() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4">
        <h1 className="text-3xl font-bold mb-4 text-blue-700">Support Our Mission</h1>
        <p className="mb-8 text-center max-w-xl text-gray-700">
          Your donation helps us reach more people, run better events, and make a real impact.
        </p>
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow"
          onClick={() => alert('Razorpay will go here')}
        >
          Donate with Razorpay
        </button>
      </main>
    </>
  );
}
