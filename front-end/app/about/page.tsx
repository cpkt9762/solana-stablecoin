"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

export default function AboutPage() {
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

            {/* Content Container */}
            <div className={`max-w-7xl mx-auto px-4 pt-8 pb-16 relative z-10 transition-opacity duration-1000 ${
                fadeIn ? "opacity-100" : "opacity-0"
            }`}>
                {/* Header */}
                <div className="cyber-panel mb-8">
                    <div className="flex justify-between items-center">
                        <div>
                            <h1 className="cyber-glitch text-3xl font-bold mb-2">PROJECT OVERVIEW</h1>
                            <p className="cyber-small-text text-gray-400">Explore USDH's Innovative Concepts & Technical Architecture</p>
                        </div>
                        <Link
                            href="/dashboard"
                            className="cyber-button-secondary"
                        >
                            <span className="button-content flex items-center">
                                <ArrowLeftIcon className="w-4 h-4 mr-1" />
                                BACK TO CONTROL
                            </span>
                            <span className="button-glitch"></span>
                        </Link>
                    </div>
                </div>

                {/* Project Overview */}
                <section className="cyber-panel mb-8">
                    <h2 className="cyber-text text-2xl mb-6">SYSTEM OVERVIEW</h2>
                    <div className="cyber-terminal">
                        <div className="cyber-terminal-header">
                            <div className="cyber-terminal-dot"></div>
                            <div className="cyber-terminal-dot"></div>
                            <div className="cyber-terminal-dot"></div>
                        </div>
                        <div className="cyber-terminal-content space-y-4">
                            <p className="cyber-small-text">
                                USDH is an innovative decentralized stablecoin system that utilizes distributed computing resources as collateral,
                                creating a new paradigm in stablecoin technology. The system not only ensures stablecoin value stability
                                but also provides a new value proposition for computing resource providers.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Core Features */}
                <section className="cyber-panel mb-8">
                    <h2 className="cyber-text text-2xl mb-6">CORE FEATURES</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="cyber-action-card">
                            <div className="cyber-stat-decoration"></div>
                            <h3 className="cyber-text text-xl mb-4">DISTRIBUTED COMPUTE COLLATERAL</h3>
                            <p className="cyber-small-text">
                                Innovatively utilizing computing resources as collateral to build a next-generation stablecoin system.
                                Automated resource management and value anchoring through smart contracts.
                            </p>
                        </div>
                        <div className="cyber-action-card">
                            <div className="cyber-stat-decoration"></div>
                            <h3 className="cyber-text text-xl mb-4">INTELLIGENT PRICE STABILITY</h3>
                            <p className="cyber-small-text">
                                Multi-layered price stability mechanism combining compute market prices
                                and on-chain oracles to ensure USDH price stability.
                            </p>
                        </div>
                        <div className="cyber-action-card">
                            <div className="cyber-stat-decoration"></div>
                            <h3 className="cyber-text text-xl mb-4">DECENTRALIZED GOVERNANCE</h3>
                            <p className="cyber-small-text">
                                DAO mechanism enables democratic adjustment of system parameters,
                                ensuring long-term stability and community benefit maximization.
                            </p>
                        </div>
                        <div className="cyber-action-card">
                            <div className="cyber-stat-decoration"></div>
                            <h3 className="cyber-text text-xl mb-4">CROSS-CHAIN INTEROPERABILITY</h3>
                            <p className="cyber-small-text">
                                Support for multi-chain deployment and cross-chain operations,
                                creating a borderless compute resource market and stablecoin ecosystem.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Technical Architecture */}
                <section className="cyber-panel">
                    <h2 className="cyber-text text-2xl mb-6">TECHNICAL ARCHITECTURE</h2>
                    <div className="cyber-terminal">
                        <div className="cyber-terminal-header">
                            <div className="cyber-terminal-dot"></div>
                            <div className="cyber-terminal-dot"></div>
                            <div className="cyber-terminal-dot"></div>
                        </div>
                        <div className="cyber-terminal-content">
                            <div className="space-y-4">
                                <p className="cyber-terminal-line">
                                    {'>'} Smart Contract Layer
                                    <span className="text-cyan-400 ml-2">
                                        Asset Minting, Liquidation & Governance
                                    </span>
                                </p>
                                <p className="cyber-terminal-line">
                                    {'>'} Oracle Network
                                    <span className="text-green-400 ml-2">
                                        Real-time Market Data & Price Feeds
                                    </span>
                                </p>
                                <p className="cyber-terminal-line">
                                    {'>'} Resource Scheduler
                                    <span className="text-yellow-400 ml-2">
                                        Compute Resource Management & Allocation
                                    </span>
                                </p>
                                <p className="cyber-terminal-line">
                                    {'>'} Cross-chain Bridge
                                    <span className="text-purple-400 ml-2">
                                        Multi-chain Asset Interoperability
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
} 