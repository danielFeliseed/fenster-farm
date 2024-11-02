import Link from 'next/link';

export default function Navbar() {
    return (
      <div className="navbar bg-white shadow-md border-b py-4">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] w-52 bg-white text-black rounded-box shadow"
            >
              <li>
                <Link href="/products">Products</Link>
              </li>
              <li>
                <a>Our Story</a>
              </li>
              <li>
                <details>
                  <summary>Socials</summary>
                  <ul className="p-2 bg-pearl-white">
                    <li>
                      <a>Facebook</a>
                    </li>
                    <li>
                      <a>YouTube</a>
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
          </div>
          <Link href="/" className="btn btn-ghost normal-case text-2xl font-bold text-black">
            Fenster Farm
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-black">
            <li>
                <Link href="/products">Products</Link>
            </li>
            <li>
              <a>Our Story</a>
            </li>
            <li>
              <details>
                <summary>Socials</summary>
                <ul className="p-2 bg-pearl-white text-black">
                  <li>
                    <a>Facebook</a>
                  </li>
                  <li>
                    <a>YouTube</a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <button className="btn hidden sm:block">
            Contact Us
          </button>
        </div>
      </div>
    );
  }
  