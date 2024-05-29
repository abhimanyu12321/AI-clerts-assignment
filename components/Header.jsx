// components/Header.js
export default function Header() {
  return (
    <header className="bg-black text-white p-8">
      <div className="container mx-auto flex-col flex gap-4 md:flex md:flex-row justify-between items-center">
        <div className="text-2xl font-bold">
          <img src="/logo.svg" alt="logo" />
        </div>
        <nav className="space-x-4">
          <a href="#" className="hover:text-yellow-500">
            Home
          </a>
          <a href="#" className="hover:text-yellow-500">
            About
          </a>
          <a href="#" className="hover:text-yellow-500 text-yellow-500">
            Certification
          </a>
          <a href="#" className="hover:text-yellow-500">
            Authorized Partners
          </a>
          <a href="#" className="hover:text-yellow-500">
            Resources
          </a>
          <a href="#" className="hover:text-yellow-500">
            AI CERTs Labs
          </a>
          <a href="#" className="hover:text-yellow-500">
            Store
          </a>
          <a href="#" className="hover:text-yellow-500">
            Contact
          </a>
        </nav>
        <button className="bg-yellow-500 px-4 py-2 rounded">
          Get Certified
        </button>
      </div>
    </header>
  );
}
