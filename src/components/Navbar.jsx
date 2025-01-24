import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navItems = [
        { title: "Home", to: "home" },
        { title: "About", to: "about" },
        { title: "Features", to: "features" },
        { title: "Impact", to: "impact" },
        { title: "Team", to: "team" },
    ];
    return (
      <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-[720px] px-4">
        <nav className={`bg-white shadow-lg px-6 py-3 ${isMenuOpen ? 'rounded-lg' : 'rounded-full'}`}>
              <div className="flex items-center justify-between">
                  {/* Logo */}
                  <div className="flex-shrink-0">
                      <span className="text-xl font-semibold">
                        <Link to='home'>Career Adviser</Link>
                      </span>
                  </div>

                  {/* Mobile Menu Button */}
                  <div className="md:hidden">
                      <button
                          onClick={() => setIsMenuOpen(!isMenuOpen)}
                          className="p-2 text-gray-600 hover:text-gray-900"
                      >
                          <svg
                              className="w-6 h-6"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                          >
                              {isMenuOpen ? (
                                  <path d="M6 18L18 6M6 6l12 12" />
                              ) : (
                                  <path d="M4 6h16M4 12h16M4 18h16" />
                              )}
                          </svg>
                      </button>
                  </div>

                  {/* Desktop Navigation */}
                  <div className="hidden md:flex items-center gap-6">
                      {navItems.map((item) => (
                          <Link
                              key={item.title}
                              to={item.to}
                              className="text-gray-600 hover:text-gray-900 text-sm font-medium cursor-pointer"
                          >
                              {item.title}
                          </Link>
                      ))}
                      {/*<motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="bg-[#75B843] text-white px-4 py-1.5 rounded-full text-sm font-medium"
                      <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="bg-[#75B843] text-white px-4 py-1.5 rounded-full text-sm font-medium"
                      >
                          Login
                      </motion.button>*/}
                  </div>
              </div>

              {/* Mobile Navigation */}
              {isMenuOpen && (
                <div className="md:hidden mt-4 pb-2 border-t border-gray-200 pt-4">
                    <div className="flex flex-col gap-4">
                        {navItems.map((item) => (
                            <Link
                                key={item.title}
                                to={item.to}
                                className="text-gray-600 hover:text-gray-900 text-sm font-medium cursor-pointer"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.title}
                            </Link>
                        ))}
                        {/*
                          <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="bg-[#75B843] text-white px-4 py-1.5 rounded-full text-sm font-medium w-fit"
                          >
                              Login
                          </motion.button>*/}
                      </div>
                  </div>
              )}
          </nav>
      </div>
  );
};

export default Navbar;