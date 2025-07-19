import Navbar from '@/components/Navbar';

export default function Login() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white flex flex-col items-center justify-center px-4">
        <h1 className="text-3xl font-bold mb-4 text-blue-700">Admin Login</h1>
        <p className="text-gray-600">We’ll add a password-protected login here soon.</p>
      </main>
    </>
  );
}
