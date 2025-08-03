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
    <nav className="bg-green-800 text-white py-4 md:py-6 sticky top-0">
      <div className="container mx-auto flex justify-between items-center">
        <h3>React Practice</h3>
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="cursor-pointer" onClick={toggleMenu}>
            {isOpen ? <IoMdClose /> : <FaBars />}
          </button>
        </div>
        <ul className="hidden md:flex space-x-4 md:space-x-6">
          <li> <Link className="hover:text-green-300">Home</Link> </li>
          <li> <Link to={"products"} className="hover:text-green-300">Products</Link> </li>
          <li> <Link to={'blogs'} className="hover:text-green-300">Blogs</Link> </li>
          <li> <Link to={'about'} className="hover:text-green-300">About</Link> </li>
          <li> <Link to={'contact'} className="hover:text-green-300">Contact</Link> </li>
        </ul>
        <button className="hidden md:block bg-green-600 px-4 py-2 rounded cursor-pointer hover:bg-green-500">Login</button>
        {/* mobile menu collapse */}
        <div className={`md:hidden w-full absolute bg-green-900 top-full left-0 ${isOpen ? 'block' : 'hidden' }`}>
          <ul className="flex flex-col items-center py-2">
             <li> <Link className="hover:text-green-300">Home</Link> </li>
              <li> <Link to={'products'} className="hover:text-green-300">Products</Link> </li>
              <li> <Link to={'blogs'} className="hover:text-green-300">Blogs</Link> </li>
              <li> <Link to={'about'} className="hover:text-green-300">About</Link> </li>
              <li> <Link to={'contact'} className="hover:text-green-300">Contact</Link> </li>
            <li>
              <button className="bg-green-600 px-4 py-2 rounded cursor-pointer hover:bg-green-500">Login</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
