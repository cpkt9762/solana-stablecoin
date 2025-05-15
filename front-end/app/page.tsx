"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function HomePage() {
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
    <main className="fixed inset-0 w-full h-full bg-black overflow-hidden flex items-center justify-center">
      {/* Loading Spinner */}
      {isLoading && (
        <div className="absolute inset-0 bg-black flex items-center justify-center">
          <div className="cyber-spinner"></div>
        </div>
      )}

      {/* Background Animation */}
      <iframe
        src="https://my.spline.design/unchained-WLMKJl4DWqwkFQ7SRYPUuNku/"
        frameBorder="0"
        className="absolute inset-0 w-full h-full opacity-60"
        onLoad={handleIframeLoad}
        title="Unchained Animation Background"
        style={{ width: '100vw', height: '100vh', position: 'absolute', left: 0, top: 0 }}
      />

      {/* Cyber Grid Overlay */}
      <div className="cyber-grid"></div>

      {/* Content Area */}
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center text-center z-10 px-4 transition-opacity duration-1000 ${
          fadeIn ? "opacity-100" : "opacity-0"
        } ${isAnimating ? "opacity-0 translate-y-4" : ""} transition-all duration-500`}
      >
        {/* Decorative Lines */}
        <div className="cyber-lines"></div>

        {/* Main Title */}
        <div className="relative">
          <div className="glitch-wrapper">
            <Link 
              href="https://usdh.network" 
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <h1 className="font-blanka cyber-glitch text-6xl sm:text-7xl md:text-8xl mb-6 tracking-widest">
                USDH
              </h1>
            </Link>
          </div>
          <div className="cyber-decoration"></div>
        </div>

        {/* Subtitle */}
        <h2 className="cyber-text text-base sm:text-lg mb-6 font-light max-w-3xl tracking-wider">
          DECENTRALIZED COMPUTE-BACKED STABLECOIN SYSTEM
        </h2>

        {/* Description */}
        <p className="cyber-small-text text-xs sm:text-sm mb-12 max-w-xl leading-relaxed tracking-wide">
          CONNECTING DISTRIBUTED COMPUTE RESOURCES WITH STABLECOIN TECHNOLOGY
          TO CREATE A MULTI-ASSET BACKED FINANCIAL ECOSYSTEM
        </p>

        {/* Buttons Container */}
        <div className="flex gap-4">
          {/* Enter System Button */}
          <button
            onClick={handleEnterClick}
            className="cyber-button group"
            disabled={isAnimating}
          >
            <span className="button-content">ENTER SYSTEM</span>
            <span className="button-glitch"></span>
            <span className="button-label">&#x2192;</span>
          </button>

          {/* Whitepaper Link */}
          <Link 
            href="/whitepaper" 
            className="cyber-button-secondary"
          >
            <span className="button-content">WHITEPAPER</span>
            <span className="button-glitch"></span>
          </Link>
        </div>

        {/* Bottom Decoration */}
        <div className="cyber-bottom-decoration"></div>
      </div>
    </main>
  );
}
