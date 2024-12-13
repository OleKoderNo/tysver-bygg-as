import { useState } from "react";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="text-white px-4">
      <p className="text-lg font-bold">Tysær Bygg AS</p>
      <GiHamburgerMenu
        className="text-2xl cursor-pointer"
        onClick={() => setMenuOpen(!menuOpen)}
      />
    </nav>
  );
};

export default Navbar;
