"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function MainPage() {
  const [fadeIn, setFadeIn] = useState(false);
  const [selectedTab, setSelectedTab] = useState('overview');

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeIn(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Cyber Grid Background */}
      <div className="cyber-grid"></div>

      {/* Navigation Header */}
      <header className="cyber-header fixed top-0 left-0 right-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="cyber-logo">
            <span className="cyber-glitch text-2xl">USDH</span>
          </Link>
          <div className="flex items-center space-x-6">
            <Link href="/dashboard" className="cyber-nav-link">Dashboard</Link>
            <Link href="/docs" className="cyber-nav-link">Docs</Link>
            <Link href="/roadmap" className="cyber-nav-link">Roadmap</Link>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <div className={`pt-24 px-4 transition-opacity duration-1000 ${
        fadeIn ? "opacity-100" : "opacity-0"
      }`}>
        <div className="max-w-7xl mx-auto">
          {/* System Stats */}
          <section className="cyber-panel mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="cyber-stat-card">
                <h3 className="cyber-text text-sm">Total Value Locked</h3>
                <p className="cyber-value text-2xl">$1,234,567.89</p>
                <div className="cyber-stat-decoration"></div>
              </div>
              <div className="cyber-stat-card">
                <h3 className="cyber-text text-sm">Active Compute Power</h3>
                <p className="cyber-value text-2xl">1.2 PetaFLOPS</p>
                <div className="cyber-stat-decoration"></div>
              </div>
              <div className="cyber-stat-card">
                <h3 className="cyber-text text-sm">USDH Supply</h3>
                <p className="cyber-value text-2xl">987,654 USDH</p>
                <div className="cyber-stat-decoration"></div>
              </div>
            </div>
          </section>

          {/* Main Actions */}
          <section className="cyber-panel mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="cyber-action-card">
                <h2 className="cyber-text text-xl mb-4">Provide Compute</h2>
                <p className="cyber-small-text mb-6">
                  Connect your computing resources to the USDH network and earn rewards.
                </p>
                <button className="cyber-button">
                  <span className="button-content">CONNECT RESOURCES</span>
                  <span className="button-glitch"></span>
                </button>
              </div>
              <div className="cyber-action-card">
                <h2 className="cyber-text text-xl mb-4">Mint USDH</h2>
                <p className="cyber-small-text mb-6">
                  Mint USDH stablecoins backed by your compute resources.
                </p>
                <button className="cyber-button">
                  <span className="button-content">START MINTING</span>
                  <span className="button-glitch"></span>
                </button>
              </div>
            </div>
          </section>

          {/* Network Status */}
          <section className="cyber-panel">
            <h2 className="cyber-text text-2xl mb-6">Network Status</h2>
            <div className="cyber-terminal">
              <div className="cyber-terminal-header">
                <div className="cyber-terminal-dot"></div>
                <div className="cyber-terminal-dot"></div>
                <div className="cyber-terminal-dot"></div>
              </div>
              <div className="cyber-terminal-content">
                <p className="cyber-terminal-line">
                  {'>'} System Status: <span className="text-green-400">OPERATIONAL</span>
                </p>
                <p className="cyber-terminal-line">
                  {'>'} Network Load: <span className="text-yellow-400">78%</span>
                </p>
                <p className="cyber-terminal-line">
                  {'>'} Active Nodes: <span className="text-blue-400">1,234</span>
                </p>
                <p className="cyber-terminal-line">
                  {'>'} Last Block: <span className="text-purple-400">#8,675,309</span>
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
} 