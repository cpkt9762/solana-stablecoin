import Link from "next/link";

export default function Dashboard() {
    return (
        <div className="container mx-auto p-8">
            <header className="flex justify-between items-center mb-8">
                <h1 className="text-4xl font-bold">USDH项目仪表盘</h1>
                <Link href="/" className="text-blue-400 hover:text-blue-300">
                    返回概念页
                </Link>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white/10 p-6 rounded-lg hover:bg-white/15 transition-colors">
                    <h2 className="text-2xl font-semibold mb-2">项目介绍</h2>
                    <p className="text-gray-300 mb-4">了解USDH的理念、架构和技术创新</p>
                    <Link href="/about" className="text-blue-400 hover:underline">查看详情 →</Link>
                </div>

                <div className="bg-white/10 p-6 rounded-lg hover:bg-white/15 transition-colors">
                    <h2 className="text-2xl font-semibold mb-2">功能演示</h2>
                    <p className="text-gray-300 mb-4">体验USDH的核心功能和交互方式</p>
                    <Link href="/docs" className="text-blue-400 hover:underline">查看详情 →</Link>
                </div>

                <div className="bg-white/10 p-6 rounded-lg hover:bg-white/15 transition-colors">
                    <h2 className="text-2xl font-semibold mb-2">路线图</h2>
                    <p className="text-gray-300 mb-4">查看项目开发计划和未来愿景</p>
                    <Link href="/roadmap" className="text-blue-400 hover:underline">查看详情 →</Link>
                </div>
            </div>

            <div className="mt-12 p-6 bg-blue-900/20 border border-blue-800/30 rounded-lg">
                <h2 className="text-2xl font-semibold mb-4">黑客松演示版本</h2>
                <p className="text-gray-300 mb-4">
                    本项目正在参与黑客松竞赛，目前展示的是概念验证版本。
                    完整功能将在后续开发中逐步实现。
                </p>
                <div className="flex gap-4 mt-6">
                    <a
                        href="https://github.com/your-repo/usdh"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded transition-colors"
                    >
                        查看源代码
                    </a>
                    <a
                        href="#"
                        className="px-4 py-2 bg-blue-600/80 hover:bg-blue-600 rounded transition-colors"
                    >
                        预约演示
                    </a>
                </div>
            </div>
        </div>
    );
} 