import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white text-primary shadow-md sticky top-0 z-50">
      <div className="w-full max-w-7xl mx-auto px-8 py-6 flex items-center">
        {/* Logo and Brand */}
        <div className="flex items-center space-x-3">
          <img src="/images/logo.jpeg" alt="Sahayatha Logo" className="h-12 w-12" />
          <Link href="/" className="text-3xl font-extrabold tracking-tight hover:underline">Sahayatha</Link>
        </div>
        {/* Navigation Links Centered */}
        <div className="flex-1 flex justify-center">
          <div className="flex items-center space-x-8">
            <NavLink href="/about" label="About Us" />
            <NavLink href="/events" label="Events" />
            <NavLink href="/our-team" label="Our Team" />
            <NavLink href="/contact" label="Contact Us" />
          </div>
        </div>
        {/* Action Buttons Right */}
        <div className="flex items-center space-x-4">
          <VolunteerButton />
          <DonateButton />
        </div>
      </div>
    </nav>
  );
}

function VolunteerButton() {
  return (
    <Link href={{ pathname: '/contact', query: { type: 'volunteer' } }} className="px-6 py-3 rounded-xl font-bold border-2 border-violet text-violet bg-transparent hover:bg-violet/10 transition-all text-lg">
      Volunteer
    </Link>
  );
}

function DonateButton() {
  return (
    <a
      href="https://razorpay.com/payment-gateway/" // Dummy Razorpay payment gateway link
      target="_blank"
      rel="noopener noreferrer"
      className="px-6 py-3 rounded-xl font-bold bg-accent text-black hover:bg-accent/80 transition-all text-lg"
    >
      Contribute
    </a>
  );
}
// ...ThemeToggle removed from main nav for Figma match...
function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="text-lg font-medium px-2 py-1 hover:text-violet transition-colors"
    >
      {label}
    </Link>
  );
}
