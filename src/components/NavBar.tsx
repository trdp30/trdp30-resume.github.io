import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";

interface NavItem {
  path: string;
  label: string;
  color: string;
}

const navItems: NavItem[] = [
  { path: "/", label: "Default Resume", color: "bg-gray-600" },
  { path: "/morphic", label: "Morphic Resume", color: "bg-blue-600" },
  { path: "/x-ai-resume", label: "xAI Resume", color: "bg-green-600" },
  { path: "/avoma-resume", label: "Avoma Resume", color: "bg-purple-600" },
  { path: "/arcana-resume", label: "Arcana Resume", color: "bg-orange-600" },
  { path: "/faang-resume", label: "FAANG Resume", color: "bg-red-600" },
  { path: "/full-stack-resume", label: "Full-Stack Resume", color: "bg-indigo-600" },
  { path: "/jjm-resume", label: "JJM Resume", color: "bg-amber-600" },
  { path: "/staff-engineer-resume", label: "Staff / AI Resume", color: "bg-cyan-600" },
  { path: "/staff-engineer-lite", label: "Staff / AI (Lite)", color: "bg-sky-600" },
  { path: "/staff-engineer-dev", label: "Staff / AI (Dev)", color: "bg-violet-600" },
  { path: "/staff-engineer-editor", label: "Staff / Editors", color: "bg-fuchsia-600" },
  { path: "/light-resume", label: "Light Resume", color: "bg-teal-600" },
  { path: "/portfolio", label: "Portfolio / What I Built", color: "bg-rose-600" },
];

// Strip the GitHub Pages base path and any trailing slash so routes compare cleanly
const normalizePath = (path: string) =>
  path.replace(/\/trdp30-resume\.github\.io/, "").replace(/\/$/, "") || "/";

export const NavBar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isManuallyHidden, setIsManuallyHidden] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const currentPath = normalizePath(location.pathname);
  const activeItem = navItems.find(
    (item) => normalizePath(item.path) === currentPath
  );

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
            setIsMenuOpen(false);
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

  // Close the dropdown on Escape or a click outside it
  useEffect(() => {
    if (!isMenuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };

    const handlePointerDown = (event: MouseEvent | TouchEvent) => {
      if (!menuRef.current?.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("touchstart", handlePointerDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("touchstart", handlePointerDown);
    };
  }, [isMenuOpen]);

  const toggleVisibility = () => {
    setIsManuallyHidden(!isManuallyHidden);
    setIsVisible(!isManuallyHidden);
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 print:hidden transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="bg-white shadow-lg border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo/Brand */}
            <div className="flex min-w-0 items-center gap-3">
              <Link
                to="/"
                className="text-xl font-bold text-gray-800 hover:text-gray-600 transition-colors"
              >
                Resume Portfolio
              </Link>
              {activeItem && (
                <span className="hidden truncate text-sm text-gray-500 sm:inline">
                  {activeItem.label}
                </span>
              )}
            </div>

            <div className="flex items-center gap-1">
              {/* Hide/Show Toggle Button */}
              <button
                onClick={toggleVisibility}
                className="p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
                title={
                  isManuallyHidden ? "Show Navigation Bar" : "Hide Navigation Bar"
                }
                aria-label={
                  isManuallyHidden ? "Show Navigation Bar" : "Hide Navigation Bar"
                }
              >
                {isManuallyHidden ? (
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 15l7-7 7 7"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                )}
              </button>

              {/* Hamburger + dropdown */}
              <div className="relative" ref={menuRef}>
                <button
                  onClick={() => setIsMenuOpen((open) => !open)}
                  className="flex items-center gap-2 rounded-lg p-2 text-gray-600 transition-colors hover:bg-gray-100"
                  aria-label="Toggle resume menu"
                  aria-haspopup="menu"
                  aria-expanded={isMenuOpen}
                  aria-controls="resume-menu"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {isMenuOpen ? (
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
                  <span className="hidden text-sm font-semibold sm:inline">
                    Resumes
                  </span>
                </button>

                {isMenuOpen && (
                  <div
                    id="resume-menu"
                    role="menu"
                    aria-label="Resume versions"
                    className="absolute right-0 top-full z-50 mt-2 max-h-[70vh] w-72 overflow-y-auto rounded-xl border border-gray-200 bg-white py-1 shadow-xl"
                  >
                    {navItems.map((item) => {
                      const isActive = normalizePath(item.path) === currentPath;
                      return (
                        <Link
                          key={item.path}
                          to={item.path}
                          role="menuitem"
                          aria-current={isActive ? "page" : undefined}
                          onClick={() => setIsMenuOpen(false)}
                          className={`flex items-center gap-3 px-4 py-2.5 text-sm transition-colors ${
                            isActive
                              ? "bg-gray-100 font-semibold text-gray-900"
                              : "text-gray-700 hover:bg-gray-50"
                          }`}
                          title={`View ${item.label}`}
                        >
                          <span
                            className={`${item.color} h-2.5 w-2.5 shrink-0 rounded-full`}
                            aria-hidden
                          />
                          <span className="truncate">{item.label}</span>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
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
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 15l7-7 7 7"
            />
          </svg>
        </button>
      )}
    </nav>
  );
};

export default NavBar;
