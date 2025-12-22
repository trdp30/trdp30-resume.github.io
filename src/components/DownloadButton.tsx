import React, { useEffect, useState } from "react";

interface DownloadButtonProps {
  handleDownloadPDF: () => void;
  loading: boolean;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({
  handleDownloadPDF,
  loading,
}) => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className={`hidden-print fixed right-4 text-white transition-transform duration-700 ease-in-out ${
        isDesktop ? "top-4 translate-y-0" : "bottom-6 translate-y-4"
      }`}
    >
      <button
        onClick={handleDownloadPDF}
        disabled={loading}
        className={`flex items-center justify-center transition-all duration-500 ease-in-out shadow-md 
          ${
            isDesktop
              ? "px-4 py-2 text-sm text-white font-medium rounded-full bg-blue-600 hover:bg-blue-700 min-w-[120px]"
              : "w-10 h-10 rounded-full bg-blue-600 hover:bg-blue-700"
          }
          ${loading ? "bg-gray-400 cursor-not-allowed" : ""}
        `}
      >
        {loading ? (
          <svg
            className="animate-spin h-5 w-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v8H4z"
            ></path>
          </svg>
        ) : (
          <>
            {/* Download icon for mobile */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5 md:hidden"
            >
              <path d="M12 3v12"></path>
              <path d="M16 11l-4 4-4-4"></path>
              <path d="M4 20h16"></path>
            </svg>
            {/* Text only visible on desktop */}
            <span className="hidden md:block">Download PDF</span>
          </>
        )}
      </button>
    </div>
  );
};

export default DownloadButton;
