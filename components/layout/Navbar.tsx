import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white shadow-md border-b">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-black"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu menu-sm mt-3 z-[1] w-52 bg-white text-black rounded-lg shadow-lg"
              >
                <li>
                  <Link href="/products" className="hover:bg-gray-100">
                    Products
                  </Link>
                </li>
                <li>
                  <details>
                    <summary className="hover:bg-gray-100">Socials</summary>
                    <ul className="bg-white rounded-lg">
                      <li>
                        <a 
                          target='_blank' 
                          href="https://www.facebook.com/fensterfarms"
                          className="hover:bg-gray-100"
                        >
                          Facebook
                        </a>
                      </li>
                      <li>
                        <a 
                          target='_blank' 
                          href="https://www.youtube.com/@FensterfarmGreenhouse"
                          className="hover:bg-gray-100"
                        >
                          YouTube
                        </a>
                      </li>
                    </ul>
                  </details>
                </li>
              </ul>
            </div>
          </div>

          {/* Logo - centered on mobile, left-aligned on desktop */}
          <div className="flex-1 flex justify-center lg:justify-start">
            <Link 
              href="/" 
              className="text-2xl font-bold text-black hover:text-gray-700 transition-colors"
            >
              Fenster Farm
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className="hidden lg:flex items-center space-x-4">
            <ul className="menu menu-horizontal px-1 text-black">
              <li>
                <Link href="/products" className="hover:bg-gray-100">
                  Products
                </Link>
              </li>
              <li>
                <details>
                  <summary className="hover:bg-gray-100">Socials</summary>
                  <ul className="p-2 bg-white rounded-lg shadow-lg z-50">
                    <li>
                      <a 
                        target='_blank' 
                        href="https://www.facebook.com/fensterfarms"
                        className="hover:bg-gray-100"
                      >
                        Facebook
                      </a>
                    </li>
                    <li>
                      <a 
                        target='_blank' 
                        href="https://www.youtube.com/@FensterfarmGreenhouse"
                        className="hover:bg-gray-100"
                      >
                        YouTube
                      </a>
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
            <Link 
              href="/#contact_form" 
              className="btn btn-ghost text-black hover:bg-gray-100"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;