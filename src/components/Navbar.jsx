import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="bg-green-500 text-white py-4 md-:py-6 relative">
      <div className="container mx-auto flex justify-between items-center">
        <h3>React Practice</h3>
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="cursor-pointer" onClick={toggleMenu}>
            {isOpen ? <IoMdClose /> : <FaBars />}
          </button>
        </div>
        <ul className="hidden md:flex space-x-4 md:space-x-6">
          <li> <Link>Home</Link> </li>
          <li> <Link>Products</Link> </li>
          <li> <Link>Blogs</Link> </li>
          <li> <Link>About</Link> </li>
          <li> <Link>Contact</Link> </li>
        </ul>
        <button className="hidden md:block">Login</button>
        {/* mobile menu collapse */}
        <div className={`md:hidden w-full absolute bg-green-600 top-full left-0 ${isOpen ? 'block' : 'hidden' }`}>
          <ul className="flex flex-col items-center py-2">
             <li> <Link>Home</Link> </li>
              <li> <Link>Products</Link> </li>
              <li> <Link>Blogs</Link> </li>
              <li> <Link>About</Link> </li>
              <li> <Link>Contact</Link> </li>
            <li>
              <button className="">Login</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
