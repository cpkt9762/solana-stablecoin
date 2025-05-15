"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function WhitepaperPage() {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeIn(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen bg-black text-white p-4">
      {/* Cyber Grid Background */}
      <div className="cyber-grid"></div>

      {/* Content Container */}
      <div className={`max-w-4xl mx-auto pt-8 relative z-10 transition-opacity duration-1000 ${
        fadeIn ? "opacity-100" : "opacity-0"
      }`}>
        {/* Header */}
        <header className="mb-12 relative">
          <div className="cyber-lines"></div>
          <h1 className="cyber-glitch text-4xl md:text-5xl text-center mb-6">
            USDH WHITEPAPER
          </h1>
          <div className="cyber-decoration"></div>
        </header>

        {/* Main Content */}
        <article className="space-y-8">
          {/* Abstract Section */}
          <section className="cyber-section">
            <h2 className="cyber-text text-2xl mb-4">Abstract</h2>
            <p className="cyber-small-text leading-relaxed">
              USDH represents a groundbreaking advancement in stablecoin technology, 
              leveraging distributed computing resources as collateral. This innovative 
              approach creates a new paradigm in decentralized finance, combining the 
              stability of traditional stablecoins with the power of distributed computing.
            </p>
          </section>

          {/* Introduction Section */}
          <section className="cyber-section">
            <h2 className="cyber-text text-2xl mb-4">Introduction</h2>
            <p className="cyber-small-text leading-relaxed">
              The cryptocurrency ecosystem has long sought a solution that bridges the 
              gap between volatile digital assets and stable value storage. USDH 
              introduces a novel approach by utilizing distributed computing power as 
              collateral, creating a more sustainable and scalable stablecoin system.
            </p>
          </section>

          {/* Technical Architecture */}
          <section className="cyber-section">
            <h2 className="cyber-text text-2xl mb-4">Technical Architecture</h2>
            <p className="cyber-small-text leading-relaxed">
              USDH's architecture is built on three main pillars:
            </p>
            <ul className="list-disc list-inside cyber-small-text mt-4 space-y-2">
              <li>Distributed Computing Network</li>
              <li>Smart Contract Infrastructure</li>
              <li>Price Stability Mechanism</li>
            </ul>
          </section>

          {/* Download Section */}
          <section className="cyber-section text-center mt-12">
            <Link 
              href="/whitepaper.pdf" 
              className="cyber-button inline-block"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="button-content">DOWNLOAD FULL WHITEPAPER</span>
              <span className="button-glitch"></span>
            </Link>
          </section>
        </article>

        {/* Navigation */}
        <nav className="mt-12 text-center">
          <Link 
            href="/"
            className="cyber-button-secondary inline-flex items-center"
          >
            <span className="button-content">
              <span className="mr-2">←</span>
              BACK TO HOME
            </span>
            <span className="button-glitch"></span>
          </Link>
        </nav>

        {/* Bottom Decoration */}
        <div className="cyber-bottom-decoration mt-16"></div>
      </div>
    </main>
  );
} 