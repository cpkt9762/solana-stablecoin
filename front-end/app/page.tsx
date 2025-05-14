"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ConceptPage() {
  const router = useRouter();
  const [isAnimating, setIsAnimating] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Fade-in effect after page load
  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeIn(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  // Handle iframe load completion
  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  // Handle button click
  const handleEnterClick = () => {
    setIsAnimating(true);
    setTimeout(() => {
      router.push("/main");
    }, 800);
  };

  return (
    <div className="fixed inset-0 w-full h-full bg-black overflow-hidden flex items-center justify-center">
      {/* Unchained Animation Background */}
      {isLoading && (
        <div className="absolute inset-0 bg-black flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-white/30 border-t-white/80 rounded-full animate-spin"></div>
        </div>
      )}

      <iframe
        src="https://my.spline.design/unchained-WLMKJl4DWqwkFQ7SRYPUuNku/"
        frameBorder="0"
        className="absolute inset-0 w-full h-full"
        onLoad={handleIframeLoad}
        title="Unchained Animation Background"
        style={{ width: '100vw', height: '100vh', position: 'absolute', left: 0, top: 0 }}
      />

      {/* Content Area - Minimalist Design */}
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center text-center z-10 px-4 transition-opacity duration-1000 ${fadeIn ? "opacity-100" : "opacity-0"
          } ${isAnimating ? "opacity-0 translate-y-4" : ""
          } transition-all duration-500`}
      >
        {/* Main Title */}
        <h1 className="font-blanka text-gradient text-5xl sm:text-7xl md:text-8xl mb-10 tracking-widest">
          USDH
        </h1>

        {/* Subtitle */}
        <h2 className="text-base sm:text-lg mb-4 font-light max-w-3xl">
          DECENTRALIZED COMPUTE-BACKED STABLECOIN SYSTEM
        </h2>

        {/* Short Description */}
        <p className="text-xs sm:text-sm text-gray-300 mb-12 max-w-xl text-spacing">
          CONNECTING DISTRIBUTED COMPUTE RESOURCES WITH STABLECOIN TECHNOLOGY
          TO CREATE A MULTI-ASSET BACKED FINANCIAL ECOSYSTEM
        </p>

        {/* Minimal Button */}
        <button
          onClick={handleEnterClick}
          className="btn-minimal"
          disabled={isAnimating}
        >
          ENTER SYSTEM →
        </button>
      </div>
    </div>
  );
}
