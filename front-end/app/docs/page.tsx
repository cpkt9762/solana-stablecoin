export default function Docs() {
    return (
        <div className="container mx-auto p-8">
            <h1 className="text-4xl font-bold mb-8">功能演示</h1>

            <div className="mb-12 p-4 bg-yellow-600/20 border border-yellow-500/30 rounded-lg">
                <p className="text-yellow-300 font-medium">
                    📝 注意：以下功能演示为黑客松阶段的概念展示，尚未实现完整功能。
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                {/* USDH铸造功能 */}
                <div className="bg-white/10 p-6 rounded-lg">
                    <h2 className="text-2xl font-bold mb-4 text-blue-400">USDH铸造</h2>
                    <p className="text-gray-300 mb-4">
                        通过抵押稳定币或算力资源，铸造等值的USDH稳定币。
                    </p>

                    <div className="bg-black/30 p-4 rounded-lg">
                        <label className="block text-sm mb-2">抵押资产</label>
                        <select className="w-full p-2 mb-4 bg-gray-800 border border-gray-700 rounded text-white" disabled>
                            <option>USDT</option>
                            <option>USDC</option>
                            <option>算力资源</option>
                        </select>

                        <label className="block text-sm mb-2">抵押数量</label>
                        <input
                            type="number"
                            className="w-full p-2 mb-4 bg-gray-800 border border-gray-700 rounded text-white"
                            placeholder="输入数量"
                            disabled
                        />

                        <label className="block text-sm mb-2">抵押率</label>
                        <select className="w-full p-2 mb-4 bg-gray-800 border border-gray-700 rounded text-white" disabled>
                            <option>150% (推荐)</option>
                            <option>130% (最低)</option>
                            <option>200% (保守)</option>
                        </select>

                        <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                            <span>将铸造:</span>
                            <span>0.00 USDH</span>
                        </div>

                        <button className="w-full bg-gray-700 text-gray-400 p-3 rounded cursor-not-allowed">
                            铸造 USDH (即将推出)
                        </button>
                    </div>
                </div>

                {/* 资金单元创建 */}
                <div className="bg-white/10 p-6 rounded-lg">
                    <h2 className="text-2xl font-bold mb-4 text-blue-400">资金单元</h2>
                    <p className="text-gray-300 mb-4">
                        创建可编程的资金单元，精确控制资金流向和使用条件。
                    </p>

                    <div className="bg-black/30 p-4 rounded-lg">
                        <label className="block text-sm mb-2">单元名称</label>
                        <input
                            type="text"
                            className="w-full p-2 mb-4 bg-gray-800 border border-gray-700 rounded text-white"
                            placeholder="输入名称"
                            disabled
                        />

                        <label className="block text-sm mb-2">金额 (USDH)</label>
                        <input
                            type="number"
                            className="w-full p-2 mb-4 bg-gray-800 border border-gray-700 rounded text-white"
                            placeholder="输入金额"
                            disabled
                        />

                        <label className="block text-sm mb-2">流向控制</label>
                        <select className="w-full p-2 mb-4 bg-gray-800 border border-gray-700 rounded text-white" disabled>
                            <option>限制接收方地址</option>
                            <option>时间锁定</option>
                            <option>条件触发</option>
                        </select>

                        <div className="mb-4">
                            <label className="inline-flex items-center">
                                <input type="checkbox" disabled className="form-checkbox h-4 w-4 bg-gray-800 border-gray-700" />
                                <span className="ml-2 text-sm text-gray-400">启用隐私保护</span>
                            </label>
                        </div>

                        <button className="w-full bg-gray-700 text-gray-400 p-3 rounded cursor-not-allowed">
                            创建资金单元 (即将推出)
                        </button>
                    </div>
                </div>
            </div>

            <h2 className="text-2xl font-bold mb-4">算力资源市场</h2>
            <div className="bg-white/10 p-6 rounded-lg mb-8">
                <div className="max-w-full overflow-x-auto">
                    <table className="min-w-full table-fixed">
                        <thead>
                            <tr className="border-b border-gray-700">
                                <th className="py-3 px-4 text-left">资源ID</th>
                                <th className="py-3 px-4 text-left">类型</th>
                                <th className="py-3 px-4 text-left">规格</th>
                                <th className="py-3 px-4 text-left">性能评分</th>
                                <th className="py-3 px-4 text-left">价格/小时</th>
                                <th className="py-3 px-4 text-left">可用性</th>
                                <th className="py-3 px-4 text-left">操作</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-300">
                            <tr className="border-b border-gray-800">
                                <td className="py-3 px-4">HR-1024</td>
                                <td className="py-3 px-4">GPU</td>
                                <td className="py-3 px-4">NVIDIA A100</td>
                                <td className="py-3 px-4">98/100</td>
                                <td className="py-3 px-4">2.5 USDH</td>
                                <td className="py-3 px-4">
                                    <span className="bg-green-900/50 text-green-400 px-2 py-1 rounded text-xs">即时</span>
                                </td>
                                <td className="py-3 px-4">
                                    <button className="bg-gray-700 text-gray-400 px-3 py-1 rounded cursor-not-allowed text-sm">
                                        租用
                                    </button>
                                </td>
                            </tr>
                            <tr className="border-b border-gray-800">
                                <td className="py-3 px-4">HR-2048</td>
                                <td className="py-3 px-4">GPU</td>
                                <td className="py-3 px-4">RTX4090</td>
                                <td className="py-3 px-4">92/100</td>
                                <td className="py-3 px-4">1.2 USDH</td>
                                <td className="py-3 px-4">
                                    <span className="bg-green-900/50 text-green-400 px-2 py-1 rounded text-xs">即时</span>
                                </td>
                                <td className="py-3 px-4">
                                    <button className="bg-gray-700 text-gray-400 px-3 py-1 rounded cursor-not-allowed text-sm">
                                        租用
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td className="py-3 px-4">HR-3072</td>
                                <td className="py-3 px-4">CPU</td>
                                <td className="py-3 px-4">64核 AMD EPYC</td>
                                <td className="py-3 px-4">95/100</td>
                                <td className="py-3 px-4">0.8 USDH</td>
                                <td className="py-3 px-4">
                                    <span className="bg-yellow-900/50 text-yellow-400 px-2 py-1 rounded text-xs">2小时后</span>
                                </td>
                                <td className="py-3 px-4">
                                    <button className="bg-gray-700 text-gray-400 px-3 py-1 rounded cursor-not-allowed text-sm">
                                        预订
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="text-center text-gray-400 mt-12">
                <p>更多功能正在开发中，敬请期待。</p>
                <p className="mt-2">如果您对项目感兴趣，请联系我们加入早期测试者名单。</p>
            </div>
        </div>
    );
} 