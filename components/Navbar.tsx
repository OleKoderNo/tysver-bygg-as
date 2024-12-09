import { useState } from "react";
import Image from "next/image";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="absolute">
      <p>Tysær Bygg AS</p>
    </nav>
  );
};

export default Navbar;
