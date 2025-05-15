"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function RoadmapPage() {
  const [fadeIn, setFadeIn] = useState(false);

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
            <Link href="/main" className="cyber-nav-link">Main</Link>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <div className={`pt-24 px-4 transition-opacity duration-1000 ${
        fadeIn ? "opacity-100" : "opacity-0"
      }`}>
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <section className="cyber-panel mb-12">
            <h1 className="cyber-glitch text-4xl md:text-5xl text-center mb-6">
              DEVELOPMENT ROADMAP
            </h1>
            <p className="cyber-text text-center max-w-3xl mx-auto">
              Tracking the evolution of USDH: From concept to reality
            </p>
          </section>

          {/* Timeline */}
          <section className="cyber-panel mb-8">
            <div className="cyber-timeline">
              {/* Phase 1 */}
              <div className="cyber-timeline-item active">
                <div className="cyber-timeline-marker"></div>
                <div className="cyber-timeline-content">
                  <h2 className="cyber-text text-2xl mb-4">Phase 1: Foundation</h2>
                  <p className="cyber-small-text mb-4">Q1-Q2 2025</p>
                  <ul className="cyber-list">
                    <li>Core Protocol Development</li>
                    <li>Smart Contract Architecture</li>
                    <li>Security Framework Implementation</li>
                    <li>Initial Testnet Deployment</li>
                  </ul>
                  <div className="cyber-progress-bar">
                    <div className="cyber-progress" style={{width: '75%'}}></div>
                  </div>
                </div>
              </div>

              {/* Phase 2 */}
              <div className="cyber-timeline-item">
                <div className="cyber-timeline-marker"></div>
                <div className="cyber-timeline-content">
                  <h2 className="cyber-text text-2xl mb-4">Phase 2: Network Expansion</h2>
                  <p className="cyber-small-text mb-4">Q3-Q4 2025</p>
                  <ul className="cyber-list">
                    <li>Validator Network Launch</li>
                    <li>Cross-chain Integration</li>
                    <li>Governance Implementation</li>
                    <li>Community Building</li>
                  </ul>
                  <div className="cyber-progress-bar">
                    <div className="cyber-progress" style={{width: '25%'}}></div>
                  </div>
                </div>
              </div>

              {/* Phase 3 */}
              <div className="cyber-timeline-item">
                <div className="cyber-timeline-marker"></div>
                <div className="cyber-timeline-content">
                  <h2 className="cyber-text text-2xl mb-4">Phase 3: Ecosystem Growth</h2>
                  <p className="cyber-small-text mb-4">2026</p>
                  <ul className="cyber-list">
                    <li>DeFi Integration</li>
                    <li>Partner Network Expansion</li>
                    <li>Advanced Features Release</li>
                    <li>Global Market Entry</li>
                  </ul>
                  <div className="cyber-progress-bar">
                    <div className="cyber-progress" style={{width: '0%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Current Status */}
          <section className="cyber-panel">
            <h2 className="cyber-text text-2xl mb-6">Current Development Status</h2>
            <div className="cyber-terminal">
              <div className="cyber-terminal-header">
                <div className="cyber-terminal-dot"></div>
                <div className="cyber-terminal-dot"></div>
                <div className="cyber-terminal-dot"></div>
              </div>
              <div className="cyber-terminal-content">
                <p className="cyber-terminal-line">
                  {'>'} Phase 1 Progress: <span className="text-green-400">75% Complete</span>
                </p>
                <p className="cyber-terminal-line">
                  {'>'} Current Focus: <span className="text-blue-400">Security Audits</span>
                </p>
                <p className="cyber-terminal-line">
                  {'>'} Next Milestone: <span className="text-yellow-400">Testnet v0.2</span>
                </p>
                <p className="cyber-terminal-line">
                  {'>'} ETA: <span className="text-purple-400">Q2 2025</span>
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
} 