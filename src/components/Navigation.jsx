import { useEffect, useState } from "react";
import { FiAlignJustify } from "react-icons/fi";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = ["home", "features", "pricing", "testimonials"];
  useEffect(() => {
    const smoothScrollHandler = (event) => {
      const anchor = event.target.closest("a");

      if (anchor && anchor.getAttribute("href")) {
        const href = anchor.getAttribute("href");
        if (href.startsWith("#") && href.length > 1) {
          const targetId = href.substring(1);
          const targetElement = document.getElementById(targetId);

          if (targetElement) {
            event.preventDefault();
            targetElement.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }
        }
      }
    };

    document.addEventListener("click", smoothScrollHandler);
    return () => {
      document.removeEventListener("click", smoothScrollHandler);
    };
  }, []);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-gray-200 bg-white/90 backdrop-blur-md dark:border-gray-700 dark:bg-slate-900/90">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo and hamburger */}
          <div className="flex items-center">
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex md:hidden hover:cursor-pointer"
              aria-label="Toggle navigation"
            >
              <FiAlignJustify className="dark:text-white text-gray-800 me-3 p-1 w-7 h-7 rounded hover:bg-gray-200 dark:hover:bg-gray-700" />
            </button>
            <a href="/" className="hover:cursor-pointer flex-shrink-0">
              <h1 className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-2xl font-bold text-transparent">
                TechFlow
              </h1>
            </a>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((id) => (
                <a
                  key={id}
                  href={`#${id}`}
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
                >
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </a>
              ))}
            </div>
          </div>

          {/* Right buttons */}
          <div className="flex items-center space-x-4">
            <button
              id="theme-toggle"
              aria-label="Toggle theme"
              className="rounded-lg bg-gray-100 p-2  hover:cursor-pointer transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <span className="sr-only">Toggle theme</span>
              <svg
                id="sun-icon"
                className="hidden h-5 w-5 text-gray-800 dark:block dark:text-gray-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                ></path>
              </svg>
              <svg
                id="moon-icon"
                className="block h-5 w-5 text-gray-800 dark:hidden dark:text-gray-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                ></path>
              </svg>
            </button>
            <button className="rounded-lg bg-blue-600 px-4 hover:cursor-pointer py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700">
              Get Started
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-2 space-y-2 px-4 pb-4">
            {navItems.map((id) => (
              <a
                key={id}
                href={`#${id}`}
                className="block rounded-md px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
