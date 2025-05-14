"use client";
import { useState, useEffect, useRef } from 'react';
import Navbar from '@/components/Navbar';
import DigitalRain from '@/components/DigitalRain';
import Image from 'next/image';

// Section components
const HeroSection = () => (
    <section className="relative h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-b from-black to-blue-950/30 z-0"></div>

        {/* Animated background effect */}
        <div className="absolute inset-0 opacity-20 z-0">
            <div className="relative w-full h-full overflow-hidden">
                <div className="absolute w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-blue-600/20 via-transparent to-transparent animate-pulse-slow"></div>
                <div className="absolute w-full h-full bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-cyan-400/10 via-transparent to-transparent animate-pulse-slow animation-delay-1000"></div>
            </div>
        </div>

        <div className="container mx-auto px-6 z-10">
            <div className="max-w-4xl">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient-hero">
                    USDH: BACKED BY REAL COMPUTE POWER
                </h1>
                <p className="text-xl md:text-2xl mb-10 text-gray-300">
                    The world's first stablecoin collateralized by distributed computing resources,
                    creating a new paradigm in digital assets
                </p>
                <div className="flex flex-wrap gap-4">
                    <a href="#about" className="btn-primary">
                        LEARN MORE ↓
                    </a>
                    <a href="#" className="btn-secondary">
                        WHITEPAPER
                    </a>
                </div>
            </div>
        </div>
    </section>
);

const MetricsSection = () => (
    <section className="py-16 bg-gradient-to-b from-blue-950/30 to-black">
        <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg border border-gray-800 hover:border-blue-500/50 transition-all hover:shadow-glow">
                    <h3 className="text-gray-400 text-sm font-medium mb-2">TOTAL SUPPLY</h3>
                    <div className="text-3xl md:text-4xl font-bold text-white mb-1">148,243 USDH</div>
                    <div className="text-green-400 font-medium">+2.5% 24h</div>
                </div>

                <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg border border-gray-800 hover:border-blue-500/50 transition-all hover:shadow-glow">
                    <h3 className="text-gray-400 text-sm font-medium mb-2">COLLATERAL RATIO</h3>
                    <div className="text-3xl md:text-4xl font-bold text-white mb-1">172%</div>
                    <div className="text-gray-500 text-sm">Min Threshold: 150%</div>
                </div>

                <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg border border-gray-800 hover:border-blue-500/50 transition-all hover:shadow-glow">
                    <h3 className="text-gray-400 text-sm font-medium mb-2">NODE COUNT</h3>
                    <div className="text-3xl md:text-4xl font-bold text-white mb-1">2,437</div>
                    <div className="text-gray-500 text-sm">Across 28 Countries</div>
                </div>
            </div>
        </div>
    </section>
);

const AboutSection = () => (
    <section id="about" className="py-20 bg-gradient-to-b from-black to-blue-950/20">
        <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">ABOUT USDH</h2>

            <div className="max-w-4xl mx-auto mb-16">
                <p className="text-xl text-gray-300 mb-6">
                    USDH (Hashrate-backed USD) is an innovative stablecoin built on the Sui blockchain
                    that leverages distributed computing resources as its primary collateral.
                </p>
                <p className="text-xl text-gray-300">
                    By connecting the growing market of cloud computing with decentralized finance,
                    USDH creates a new class of asset-backed stablecoins with intrinsic utility and value.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-gray-900/30 backdrop-blur-sm p-8 rounded-lg hover:bg-gray-900/50 transition-all">
                    <h3 className="text-2xl font-bold mb-4 text-center text-blue-400">PRICE STABILITY</h3>
                    <p className="text-gray-300 text-center">
                        Advanced pegging algorithms and multi-asset reserve management
                    </p>
                </div>

                <div className="bg-gray-900/30 backdrop-blur-sm p-8 rounded-lg hover:bg-gray-900/50 transition-all">
                    <h3 className="text-2xl font-bold mb-4 text-center text-cyan-400">REAL COLLATERAL</h3>
                    <p className="text-gray-300 text-center">
                        Backed by verifiable computing resources with real-world utility
                    </p>
                </div>

                <div className="bg-gray-900/30 backdrop-blur-sm p-8 rounded-lg hover:bg-gray-900/50 transition-all">
                    <h3 className="text-2xl font-bold mb-4 text-center text-purple-400">TRANSPARENCY</h3>
                    <p className="text-gray-300 text-center">
                        Zero-knowledge proofs for privacy with verifiability
                    </p>
                </div>
            </div>
        </div>
    </section>
);

const HowItWorksSection = () => (
    <section className="py-20 bg-gradient-to-b from-blue-950/20 to-black">
        <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">HOW USDH WORKS</h2>

            <div className="mb-16 max-w-4xl mx-auto p-8 bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-lg border border-gray-800">
                <div className="aspect-w-16 aspect-h-9 bg-gray-800 rounded-lg mb-6 flex items-center justify-center">
                    <div className="text-gray-500">
                        [SIMPLIFIED DIAGRAM OF USDH ECOSYSTEM]
                    </div>
                </div>
            </div>

            <div className="max-w-4xl mx-auto">
                <p className="text-xl text-gray-300 mb-8">
                    The USDH ecosystem operates through four interconnected layers:
                </p>

                <div className="space-y-8">
                    <div className="flex items-start">
                        <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1 flex-shrink-0">1</div>
                        <div>
                            <h3 className="text-xl font-bold mb-2 text-blue-400">RESOURCE LAYER</h3>
                            <p className="text-gray-300">
                                Global network of distributed heterogeneous compute nodes
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start">
                        <div className="bg-cyan-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1 flex-shrink-0">2</div>
                        <div>
                            <h3 className="text-xl font-bold mb-2 text-cyan-400">VALIDATION LAYER</h3>
                            <p className="text-gray-300">
                                Zero-knowledge proofs and resource authenticity verification
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start">
                        <div className="bg-indigo-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1 flex-shrink-0">3</div>
                        <div>
                            <h3 className="text-xl font-bold mb-2 text-indigo-400">PROTOCOL LAYER</h3>
                            <p className="text-gray-300">
                                On-chain smart contracts, multi-source oracles, and governance
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start">
                        <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1 flex-shrink-0">4</div>
                        <div>
                            <h3 className="text-xl font-bold mb-2 text-purple-400">APPLICATION LAYER</h3>
                            <p className="text-gray-300">
                                Fund units, compute market, and financial derivatives
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const FeaturesSection = () => (
    <section id="features" className="py-20 bg-gradient-to-b from-black to-blue-950/20">
        <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">FEATURES</h2>

            <div className="space-y-12">
                <div>
                    <h3 className="text-2xl font-bold mb-6 text-blue-400">USDH STABLECOIN</h3>
                    <div className="bg-gray-900/30 backdrop-blur-sm p-8 rounded-lg border border-gray-800">
                        <ul className="list-disc list-inside space-y-2 text-gray-300">
                            <li>1:1 USD pegged stablecoin</li>
                            <li>Backed by verifiable compute resources</li>
                            <li>Overcollateralized for stability</li>
                            <li>Transparent reserve management</li>
                            <li>Low transaction fees</li>
                        </ul>
                    </div>
                </div>

                <div>
                    <h3 className="text-2xl font-bold mb-6 text-cyan-400">FUND UNITS</h3>
                    <div className="bg-gray-900/30 backdrop-blur-sm p-8 rounded-lg border border-gray-800">
                        <ul className="list-disc list-inside space-y-2 text-gray-300">
                            <li>Programmable treasury management</li>
                            <li>Customizable flow controls</li>
                            <li>Multi-signature authorization</li>
                            <li>On-chain privacy protection</li>
                            <li>Cross-chain asset support</li>
                        </ul>
                    </div>
                </div>

                <div>
                    <h3 className="text-2xl font-bold mb-6 text-purple-400">COMPUTE MARKET</h3>
                    <div className="bg-gray-900/30 backdrop-blur-sm p-8 rounded-lg border border-gray-800">
                        <ul className="list-disc list-inside space-y-2 text-gray-300">
                            <li>Decentralized compute resource marketplace</li>
                            <li>Real-time resource pricing and availability</li>
                            <li>Automated matching and allocation</li>
                            <li>Performance-based rating system</li>
                            <li>Flexible rental terms</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const RoadmapSection = () => (
    <section id="roadmap" className="py-20 bg-gradient-to-b from-blue-950/20 to-black">
        <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">ROADMAP</h2>

            <div className="flex justify-center mb-12">
                <div className="relative flex items-center max-w-3xl">
                    <div className="h-1 bg-gray-700 flex-grow"></div>
                    <div className="h-4 w-4 rounded-full bg-blue-500 mx-2 relative">
                        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-gray-400">Phase 1</div>
                        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-xs text-blue-400">(Current)</div>
                    </div>
                    <div className="h-1 bg-gray-700 flex-grow"></div>
                    <div className="h-4 w-4 rounded-full bg-gray-700 mx-2 relative">
                        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-gray-400">Phase 2</div>
                    </div>
                    <div className="h-1 bg-gray-700 flex-grow"></div>
                    <div className="h-4 w-4 rounded-full bg-gray-700 mx-2 relative">
                        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-gray-400">Phase 3</div>
                    </div>
                    <div className="h-1 bg-gray-700 flex-grow"></div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                <div className="bg-gray-900/30 backdrop-blur-sm p-8 rounded-lg border border-blue-500/50 hover:shadow-glow-blue transition-all">
                    <h3 className="text-xl font-bold mb-4 text-blue-400">PHASE 1: FOUNDATION (2025 Q1-Q2)</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-300">
                        <li>Develop zero-knowledge proof core contract system</li>
                        <li>Build cross-platform node client</li>
                        <li>Establish initial oracle and validator networks</li>
                    </ul>
                </div>

                <div className="bg-gray-900/30 backdrop-blur-sm p-8 rounded-lg border border-gray-800 transition-all">
                    <h3 className="text-xl font-bold mb-4 text-gray-400">PHASE 2: VALIDATION NETWORK (2025 Q3-Q4)</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-400">
                        <li>Deploy testnet and recruit early compute providers</li>
                        <li>Implement basic fund unit functionality and ZK auditing</li>
                        <li>Complete comprehensive security audits and formal verification</li>
                    </ul>
                </div>

                <div className="bg-gray-900/30 backdrop-blur-sm p-8 rounded-lg border border-gray-800 transition-all">
                    <h3 className="text-xl font-bold mb-4 text-gray-400">PHASE 3: MAINNET LAUNCH (2026)</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-400">
                        <li>Deploy mainnet</li>
                        <li>Implement cross-chain asset integration</li>
                        <li>Establish decentralized governance</li>
                        <li>Expand ecosystem and use cases</li>
                    </ul>
                </div>
            </div>

            <div className="max-w-3xl mx-auto">
                <p className="text-sm text-gray-400 mb-4">Current Progress:</p>
                <div className="w-full h-3 bg-gray-800 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 rounded-full" style={{ width: '15%' }}></div>
                </div>
            </div>
        </div>
    </section>
);

const Footer = () => (
    <footer className="py-12 bg-black border-t border-gray-800">
        <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="mb-6 md:mb-0">
                    <div className="font-blanka text-xl text-white tracking-wider mb-2">USDH</div>
                    <p className="text-gray-500">© 2025</p>
                </div>

                <div className="flex space-x-6 mb-6 md:mb-0">
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">Github</a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">Twitter</a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">Discord</a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">Telegram</a>
                </div>

                <div className="flex space-x-6">
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">Documentation</a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">FAQ</a>
                </div>
            </div>
        </div>
    </footer>
);

export default function MainPage() {
    // For scroll animation
    const [visible, setVisible] = useState(false);
    const sectionsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setVisible(true);

        if (typeof window !== 'undefined') {
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('appear');
                        }
                    });
                },
                {
                    root: null,
                    rootMargin: '0px',
                    threshold: 0.1,
                }
            );

            const sections = document.querySelectorAll('.fade-in-section');
            sections.forEach((section) => {
                observer.observe(section);
            });

            return () => {
                sections.forEach((section) => {
                    observer.unobserve(section);
                });
            };
        }
    }, []);

    return (
        <main className={`min-h-screen transition-opacity duration-1000 ${visible ? 'opacity-100' : 'opacity-0'}`} ref={sectionsRef}>
            {/* Digital Rain Background */}
            <DigitalRain />

            <Navbar />

            <HeroSection />

            <div className="fade-in-section">
                <MetricsSection />
            </div>

            <div className="fade-in-section">
                <AboutSection />
            </div>

            <div className="fade-in-section">
                <HowItWorksSection />
            </div>

            <div className="fade-in-section">
                <FeaturesSection />
            </div>

            <div className="fade-in-section">
                <RoadmapSection />
            </div>

            <Footer />
        </main>
    );
} 