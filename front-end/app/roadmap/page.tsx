export default function Roadmap() {
    return (
        <div className="container mx-auto p-8">
            <h1 className="text-4xl font-bold mb-8">项目路线图</h1>

            <div className="relative">
                {/* 中央连接线 */}
                <div className="absolute left-[19px] md:left-1/2 md:transform md:-translate-x-px top-0 h-full border-l-2 border-blue-500/50"></div>

                <div className="space-y-12">
                    {/* 第一阶段 */}
                    <div className="relative flex flex-col md:flex-row items-start md:justify-between">
                        <div className="md:w-1/2 md:pr-12 md:text-right order-1 md:order-1">
                            <h3 className="text-xl font-bold text-blue-400">阶段一：基础构建阶段</h3>
                            <p className="text-blue-300">2025 Q1-Q2</p>
                            <ul className="mt-2 text-gray-300 list-disc list-inside md:list-outside">
                                <li>开发支持零知识证明的核心合约系统</li>
                                <li>构建跨平台节点客户端</li>
                                <li>建立初始预言机网络与验证者网络</li>
                            </ul>
                        </div>
                        <div className="absolute left-0 md:left-1/2 md:transform md:-translate-x-1/2 w-10 h-10 rounded-full bg-blue-600 border-4 border-gray-900 z-10 flex items-center justify-center text-white font-bold">
                            1
                        </div>
                        <div className="md:w-1/2 md:pl-12 order-2 md:order-2 pt-6 md:pt-0"></div>
                    </div>

                    {/* 第二阶段 */}
                    <div className="relative flex flex-col md:flex-row items-start md:justify-between">
                        <div className="md:w-1/2 md:pr-12 order-1 md:order-2"></div>
                        <div className="absolute left-0 md:left-1/2 md:transform md:-translate-x-1/2 w-10 h-10 rounded-full bg-blue-600 border-4 border-gray-900 z-10 flex items-center justify-center text-white font-bold">
                            2
                        </div>
                        <div className="md:w-1/2 md:pl-12 order-2 md:order-1 pt-6 md:pt-0">
                            <h3 className="text-xl font-bold text-blue-400">阶段二：验证网络阶段</h3>
                            <p className="text-blue-300">2025 Q3-Q4</p>
                            <ul className="mt-2 text-gray-300 list-disc list-inside">
                                <li>测试网部署并招募早期算力提供者</li>
                                <li>实现基础资金单元功能与零知识审计</li>
                                <li>完成全面安全审计与形式化验证</li>
                            </ul>
                        </div>
                    </div>

                    {/* 第三阶段 */}
                    <div className="relative flex flex-col md:flex-row items-start md:justify-between">
                        <div className="md:w-1/2 md:pr-12 md:text-right order-1 md:order-1">
                            <h3 className="text-xl font-bold text-blue-400">阶段三：主网上线阶段</h3>
                            <p className="text-blue-300">2026 Q1-Q2</p>
                            <ul className="mt-2 text-gray-300 list-disc list-inside md:list-outside">
                                <li>主网正式启动</li>
                                <li>实现跨链资产桥接</li>
                                <li>开放开发者API与SDK</li>
                            </ul>
                        </div>
                        <div className="absolute left-0 md:left-1/2 md:transform md:-translate-x-1/2 w-10 h-10 rounded-full bg-blue-600 border-4 border-gray-900 z-10 flex items-center justify-center text-white font-bold">
                            3
                        </div>
                        <div className="md:w-1/2 md:pl-12 order-2 md:order-2 pt-6 md:pt-0"></div>
                    </div>

                    {/* 第四阶段 */}
                    <div className="relative flex flex-col md:flex-row items-start md:justify-between">
                        <div className="md:w-1/2 md:pr-12 order-1 md:order-2"></div>
                        <div className="absolute left-0 md:left-1/2 md:transform md:-translate-x-1/2 w-10 h-10 rounded-full bg-blue-600 border-4 border-gray-900 z-10 flex items-center justify-center text-white font-bold">
                            4
                        </div>
                        <div className="md:w-1/2 md:pl-12 order-2 md:order-1 pt-6 md:pt-0">
                            <h3 className="text-xl font-bold text-blue-400">阶段四：生态扩展阶段</h3>
                            <p className="text-blue-300">2026 Q3-Q4</p>
                            <ul className="mt-2 text-gray-300 list-disc list-inside">
                                <li>推出合成资产与衍生品市场</li>
                                <li>建立全面的跨链互操作性</li>
                                <li>实现完全去中心化治理</li>
                            </ul>
                        </div>
                    </div>

                    {/* 第五阶段 */}
                    <div className="relative flex flex-col md:flex-row items-start md:justify-between">
                        <div className="md:w-1/2 md:pr-12 md:text-right order-1 md:order-1">
                            <h3 className="text-xl font-bold text-blue-400">阶段五：全球规模阶段</h3>
                            <p className="text-blue-300">2027及以后</p>
                            <ul className="mt-2 text-gray-300 list-disc list-inside md:list-outside">
                                <li>支持数百万节点的全球算力网络</li>
                                <li>实现算力资源的标准市场定价机制</li>
                                <li>与传统云计算和金融系统深度整合</li>
                            </ul>
                        </div>
                        <div className="absolute left-0 md:left-1/2 md:transform md:-translate-x-1/2 w-10 h-10 rounded-full bg-blue-600 border-4 border-gray-900 z-10 flex items-center justify-center text-white font-bold">
                            5
                        </div>
                        <div className="md:w-1/2 md:pl-12 order-2 md:order-2 pt-6 md:pt-0"></div>
                    </div>
                </div>
            </div>

            <div className="mt-16 bg-blue-900/20 p-6 rounded-lg border border-blue-800/30">
                <h3 className="text-xl font-bold mb-4">当前进度</h3>
                <div className="w-full h-4 bg-gray-700 rounded-full overflow-hidden">
                    <div className="bg-blue-600 h-full" style={{ width: '15%' }}></div>
                </div>
                <div className="mt-4 text-gray-300">
                    我们目前处于阶段一的初期阶段，正在开发核心架构和概念验证。
                </div>
            </div>
        </div>
    );
} 