import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

interface NavItem {
  path: string;
  label: string;
  color: string;
}

const navItems: NavItem[] = [
  { path: "/", label: "Default Resume", color: "bg-gray-600 hover:bg-gray-700" },
  { path: "/morphic", label: "Morphic Resume", color: "bg-blue-600 hover:bg-blue-700" },
  { path: "/x-ai-resume", label: "xAI Resume", color: "bg-green-600 hover:bg-green-700" },
  { path: "/avoma-resume", label: "Avoma Resume", color: "bg-purple-600 hover:bg-purple-700" },
  { path: "/arcana-resume", label: "Arcana Resume", color: "bg-orange-600 hover:bg-orange-700" },
  { path: "/faang-resume", label: "FAANG Resume", color: "bg-red-600 hover:bg-red-700" },
];

export const NavBar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isManuallyHidden, setIsManuallyHidden] = useState(false);
  const location = useLocation();

  // Hide navbar on scroll down, show on scroll up (only if not manually hidden)
  useEffect(() => {
    if (isManuallyHidden) return; // Don't auto-show/hide if manually controlled
    
    let lastScrollY = window.scrollY;
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          
          // Show navbar at top of page or when scrolling up
          if (currentScrollY < 10) {
            setIsVisible(true);
          } else if (currentScrollY < lastScrollY) {
            // Scrolling up
            setIsVisible(true);
          } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
            // Scrolling down and past 100px
            setIsVisible(false);
            setIsExpanded(false);
          }
          
          lastScrollY = currentScrollY;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isManuallyHidden]);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const toggleVisibility = () => {
    setIsManuallyHidden(!isManuallyHidden);
    setIsVisible(!isManuallyHidden);
    setIsExpanded(false);
  };

  return (
    <nav
      className={`hidden fixed top-0 left-0 right-0 z-50 print:hidden transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="bg-white shadow-lg border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo/Brand */}
            <div className="flex items-center">
              <Link
                to="/"
                className="text-xl font-bold text-gray-800 hover:text-gray-600 transition-colors"
              >
                Resume Portfolio
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-2">
              {navItems.map((item) => {
                // Normalize pathname by removing base path and trailing slashes
                const normalizedPath = location.pathname.replace(/\/trdp30-resume\.github\.io/, "").replace(/\/$/, "") || "/";
                const normalizedItemPath = item.path.replace(/\/$/, "") || "/";
                const isActive = normalizedPath === normalizedItemPath;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`${item.color} text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-all ${
                      isActive ? "ring-2 ring-offset-2 ring-offset-white ring-gray-400" : ""
                    }`}
                    title={`View ${item.label}`}
                  >
                    {item.label}
                  </Link>
                );
              })}
              {/* Hide/Show Toggle Button */}
              <button
                onClick={toggleVisibility}
                className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-all"
                title={isManuallyHidden ? "Show Navigation Bar" : "Hide Navigation Bar"}
                aria-label={isManuallyHidden ? "Show Navigation Bar" : "Hide Navigation Bar"}
              >
                {isManuallyHidden ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </button>
            </div>

            {/* Mobile Menu Buttons */}
            <div className="md:hidden flex items-center gap-2">
              <button
                onClick={toggleVisibility}
                className="p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
                title={isManuallyHidden ? "Show Navigation Bar" : "Hide Navigation Bar"}
                aria-label={isManuallyHidden ? "Show Navigation Bar" : "Hide Navigation Bar"}
              >
                {isManuallyHidden ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </button>
              <button
                onClick={toggleExpanded}
                className="p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
                aria-label="Toggle menu"
                aria-expanded={isExpanded}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {isExpanded ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div
            className={`md:hidden overflow-hidden transition-all duration-300 ${
              isExpanded ? "max-h-96 pb-4" : "max-h-0"
            }`}
          >
            <div className="flex flex-col gap-2 pt-2">
              {navItems.map((item) => {
                // Normalize pathname by removing base path and trailing slashes
                const normalizedPath = location.pathname.replace(/\/trdp30-resume\.github\.io/, "").replace(/\/$/, "") || "/";
                const normalizedItemPath = item.path.replace(/\/$/, "") || "/";
                const isActive = normalizedPath === normalizedItemPath;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsExpanded(false)}
                    className={`${item.color} text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-all text-center ${
                      isActive ? "ring-2 ring-offset-2 ring-offset-white ring-gray-400" : ""
                    }`}
                    title={`View ${item.label}`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating Show Button - appears when navbar is hidden */}
      {!isVisible && (
        <button
          onClick={toggleVisibility}
          className="fixed top-4 right-4 z-50 bg-gray-600 hover:bg-gray-700 text-white p-3 rounded-full shadow-lg transition-all print:hidden"
          title="Show Navigation Bar"
          aria-label="Show Navigation Bar"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        </button>
      )}
    </nav>
  );
};

export default NavBar;

