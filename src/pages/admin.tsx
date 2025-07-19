import Navbar from '@/components/Navbar';

export default function Admin() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4">
        <h1 className="text-3xl font-bold mb-4 text-blue-700">Admin Dashboard</h1>
        <p className="text-gray-600">This is where you'll view donations securely.</p>
      </main>
    </>
  );
}
