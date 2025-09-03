import { useContext, useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("/");
  const location = useLocation();
  const { user, handleSignOut } = useContext(AuthContext);

  useEffect(() => {
    setActiveLink(location.pathname || "/");
  }, [location.pathname]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const handleLinkClick = (path) => {
    setActiveLink(path);
  };

  const handleSignOutUser = () => {
    handleSignOut();
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
          <li>
            <Link
              to={"/"}
              className={`${
                activeLink === "/" ? "text-green-300" : "hover:text-green-300"
              }`}
              onClick={() => handleLinkClick("/")}
            >
              Home
            </Link>
          </li>
          <li>
            {" "}
            <Link
              to={"/products"}
              className={`${
                activeLink === "/products"
                  ? "text-green-300"
                  : "hover:text-green-300"
              }`}
              onClick={() => handleLinkClick("/products")}
            >
              Products
            </Link>{" "}
          </li>
          <li>
            {" "}
            <Link
              to={"/blogs"}
              className={`${
                activeLink === "/blogs"
                  ? "text-green-300"
                  : "hover:text-green-300"
              }`}
              onClick={() => handleLinkClick("/blogs")}
            >
              Blogs
            </Link>{" "}
          </li>
          <li>
            {" "}
            <Link
              to={"/about"}
              className={`${
                activeLink === "/about"
                  ? "text-green-300"
                  : "hover:text-green-300"
              }`}
              onClick={() => handleLinkClick("/about")}
            >
              About
            </Link>{" "}
          </li>
          <li>
            {" "}
            <Link
              to={"/contact"}
              className={`${
                activeLink === "/contact"
                  ? "text-green-300"
                  : "hover:text-green-300"
              }`}
              onClick={() => handleLinkClick("/contact")}
            >
              Contact
            </Link>{" "}
          </li>
        </ul>
        <div className="flex items-center gap-3">
          {user ? (
            <div>
              <span>{user?.email}</span>
              <button onClick={handleSignOutUser} className="hidden md:block bg-green-600 px-4 py-2 rounded cursor-pointer hover:bg-green-500">
                Signout
              </button>
            </div>
          ) : (
            <Link to={"/login"}>
              <button className="hidden md:block bg-green-600 px-4 py-2 rounded cursor-pointer hover:bg-green-500">
                Login
              </button>
            </Link>
          )}
        </div>
        {/* mobile menu collapse */}
        <div
          className={`md:hidden w-full absolute bg-green-900 top-full left-0 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col items-center py-2">
            <li>
              {" "}
              <Link className="hover:text-green-300">Home</Link>{" "}
            </li>
            <li>
              {" "}
              <Link to={"products"} className="hover:text-green-300">
                Products
              </Link>{" "}
            </li>
            <li>
              {" "}
              <Link to={"blogs"} className="hover:text-green-300">
                Blogs
              </Link>{" "}
            </li>
            <li>
              {" "}
              <Link to={"about"} className="hover:text-green-300">
                About
              </Link>{" "}
            </li>
            <li>
              {" "}
              <Link to={"contact"} className="hover:text-green-300">
                Contact
              </Link>{" "}
            </li>
            <li>
              <Link to={"/login"}>
                <button className="bg-green-600 px-4 py-2 rounded cursor-pointer hover:bg-green-500">
                  Login
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
