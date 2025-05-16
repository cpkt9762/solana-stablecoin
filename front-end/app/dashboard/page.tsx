"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

export default function Dashboard() {
    const [fadeIn, setFadeIn] = useState(false);
    const [systemStatus, setSystemStatus] = useState({
        status: "OPERATIONAL",
        load: "78%",
        nodes: "1,234",
        lastBlock: "#8,675,309"
    });

    useEffect(() => {
        const timer = setTimeout(() => {
            setFadeIn(true);
        }, 500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`py-8 transition-opacity duration-1000 ${
            fadeIn ? "opacity-100" : "opacity-0"
        }`}>
            {/* Cyber Grid Background */}
            <div className="cyber-grid"></div>

            {/* Header Section */}
            <div className="cyber-panel mb-8">
                <div className="flex justify-between items-center">
                    <div>
                        <h1 className="cyber-glitch text-3xl font-bold mb-2">USDH控制中心</h1>
                        <p className="cyber-small-text text-gray-400">系统状态监控与管理界面</p>
                    </div>
                    <Link
                        href="/"
                        className="cyber-button-secondary"
                    >
                        <span className="button-content flex items-center">
                            <ArrowLeftIcon className="w-4 h-4 mr-1" />
                            返回主页
                        </span>
                        <span className="button-glitch"></span>
                    </Link>
                </div>
            </div>

            {/* System Status Panel */}
            <div className="cyber-panel mb-8">
                <h2 className="cyber-text text-xl mb-6">系统状态</h2>
                <div className="cyber-terminal">
                    <div className="cyber-terminal-header">
                        <div className="cyber-terminal-dot"></div>
                        <div className="cyber-terminal-dot"></div>
                        <div className="cyber-terminal-dot"></div>
                    </div>
                    <div className="cyber-terminal-content">
                        <p className="cyber-terminal-line">
                            {'>'} System Status: <span className="text-green-400">{systemStatus.status}</span>
                        </p>
                        <p className="cyber-terminal-line">
                            {'>'} Network Load: <span className="text-yellow-400">{systemStatus.load}</span>
                        </p>
                        <p className="cyber-terminal-line">
                            {'>'} Active Nodes: <span className="text-blue-400">{systemStatus.nodes}</span>
                        </p>
                        <p className="cyber-terminal-line">
                            {'>'} Last Block: <span className="text-purple-400">{systemStatus.lastBlock}</span>
                        </p>
                    </div>
                </div>
            </div>

            {/* Quick Actions Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <Link href="/about" className="block">
                    <div className="cyber-action-card">
                        <div className="cyber-stat-decoration"></div>
                        <h2 className="cyber-text text-xl mb-4">项目介绍</h2>
                        <p className="cyber-small-text mb-6">了解USDH的理念、架构和技术创新</p>
                        <div className="flex justify-end">
                            <span className="inline-flex items-center text-cyan-400 hover:text-cyan-300">
                                查看详情 <ArrowRightIcon className="w-4 h-4 ml-1" />
                            </span>
                        </div>
                    </div>
                </Link>

                <Link href="/docs" className="block">
                    <div className="cyber-action-card">
                        <div className="cyber-stat-decoration"></div>
                        <h2 className="cyber-text text-xl mb-4">功能演示</h2>
                        <p className="cyber-small-text mb-6">体验USDH的核心功能和交互方式</p>
                        <div className="flex justify-end">
                            <span className="inline-flex items-center text-cyan-400 hover:text-cyan-300">
                                查看详情 <ArrowRightIcon className="w-4 h-4 ml-1" />
                            </span>
                        </div>
                    </div>
                </Link>

                <Link href="/roadmap" className="block">
                    <div className="cyber-action-card">
                        <div className="cyber-stat-decoration"></div>
                        <h2 className="cyber-text text-xl mb-4">路线图</h2>
                        <p className="cyber-small-text mb-6">查看项目开发计划和未来愿景</p>
                        <div className="flex justify-end">
                            <span className="inline-flex items-center text-cyan-400 hover:text-cyan-300">
                                查看详情 <ArrowRightIcon className="w-4 h-4 ml-1" />
                            </span>
                        </div>
                    </div>
                </Link>
            </div>

            {/* Project Status */}
            <div className="cyber-panel">
                <h2 className="cyber-text text-xl mb-6">项目状态</h2>
                <div className="bg-black/40 border border-cyan-800/50 rounded-lg p-6">
                    <p className="cyber-small-text mb-4">
                        USDH项目目前处于技术验证阶段，我们正在积极开发和优化核心功能。
                        作为创新项目，我们采用迭代式开发方法，持续完善系统架构和用户体验。
                    </p>
                    <div className="flex flex-wrap gap-4 mt-6">
                        <a
                            href="https://github.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cyber-button"
                        >
                            <span className="button-content">查看源代码</span>
                            <span className="button-glitch"></span>
                        </a>
                        <a
                            href="#"
                            className="cyber-button-secondary"
                        >
                            <span className="button-content">预约演示</span>
                            <span className="button-glitch"></span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
} 