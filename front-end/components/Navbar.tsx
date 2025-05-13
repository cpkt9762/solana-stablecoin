"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-md">
            <div className="container mx-auto px-4 py-3">
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <Link href="/dashboard" className="text-xl font-bold text-white mr-8">
                            USDH
                        </Link>
                        <div className="hidden md:flex space-x-6">
                            <Link href="/dashboard" className="text-white hover:text-blue-400">首页</Link>
                            <Link href="/about" className="text-white hover:text-blue-400">项目介绍</Link>
                            <Link href="/docs" className="text-white hover:text-blue-400">功能演示</Link>
                            <Link href="/roadmap" className="text-white hover:text-blue-400">路线图</Link>
                        </div>
                    </div>

                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
                        连接钱包
                    </button>

                    <button
                        className="md:hidden text-white"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? "关闭" : "菜单"}
                    </button>
                </div>

                {isMenuOpen && (
                    <div className="md:hidden mt-4 pb-4 flex flex-col space-y-3">
                        <Link href="/dashboard" className="text-white hover:text-blue-400">首页</Link>
                        <Link href="/about" className="text-white hover:text-blue-400">项目介绍</Link>
                        <Link href="/docs" className="text-white hover:text-blue-400">功能演示</Link>
                        <Link href="/roadmap" className="text-white hover:text-blue-400">路线图</Link>
                    </div>
                )}
            </div>
        </nav>
    );
} 