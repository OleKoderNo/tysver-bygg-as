import { useState } from "react";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white text-black shadow-md sticky top-0 z-50 flex flex-col">
      <div className="flex justify-between w-full items-center px-4 py-3 md:px-8">
        {/* Logo */}
        <Link href="/" className="text-lg font-bold">
          Tysær Bygg AS
        </Link>

        {/* Hamburger menu */}
        <div className="md:hidden">
          {menuOpen ? (
            <IoClose
              className="text-2xl cursor-pointer"
              onClick={() => setMenuOpen(false)}
            />
          ) : (
            <GiHamburgerMenu
              className="text-2xl cursor-pointer"
              onClick={() => setMenuOpen(true)}
            />
          )}
        </div>

        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-8">
          <li>
            <Link href="/" className="hover:text-gray-600">
              Hjem
            </Link>
          </li>
          <li>
            <Link href="/om-oss" className="hover:text-gray-600">
              Om oss
            </Link>
          </li>
          <li>
            <Link href="/vare-tjenester" className="hover:text-gray-600">
              Våre tjenester
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <ul className="md:hidden bg-white border-t border-gray-200">
          <li className="py-2 px-4 border-b border-gray-200">
            <Link
              href="/"
              className="block hover:text-gray-600"
              onClick={() => setMenuOpen(false)}
            >
              Hjem
            </Link>
          </li>
          <li className="py-2 px-4 border-b border-gray-200">
            <Link
              href="/om-oss"
              className="block hover:text-gray-600"
              onClick={() => setMenuOpen(false)}
            >
              Om oss
            </Link>
          </li>
          <li className="py-2 px-4">
            <Link
              href="/vare-tjenester"
              className="block hover:text-gray-600"
              onClick={() => setMenuOpen(false)}
            >
              Våre tjenester
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
