export default function About() {
    return (
        <div className="container mx-auto p-8">
            <h1 className="text-4xl font-bold mb-8">项目介绍</h1>

            <div className="prose prose-invert max-w-none">
                <h2 className="text-2xl font-bold mb-4 text-blue-400">USDH: 去中心化算力支持的可编程稳定币系统</h2>

                <p className="mb-6">
                    USDH（Hashrate-backed USD）是一个革命性的金融产品，将分布式计算资源与稳定币技术深度融合，
                    创建了一个多层资产支持的可编程数字货币生态系统。USDH不仅提供价值存储媒介，
                    还将闲置算力资源代币化，解决了算力市场流动性低、定价不透明和资源浪费的行业痛点。
                </p>

                <h3 className="text-xl font-bold mb-3 mt-8 text-blue-300">四层架构设计</h3>

                <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li><strong className="text-white">资源层</strong>：由全球分布式的异质算力节点组成，包括通用计算、AI加速器、专用芯片等多样化资源。</li>
                    <li><strong className="text-white">验证层</strong>：通过零知识证明和资源真实性验证确保所有贡献的算力资源真实可信。</li>
                    <li><strong className="text-white">协议层</strong>：由区块链上的智能合约、多源预言机网络和治理机制组成，确保资源的发现、定价和交易。</li>
                    <li><strong className="text-white">应用层</strong>：包括资金单元、算力交易市场、金融衍生品和合成资产市场，提供完整生态系统。</li>
                </ul>

                <h3 className="text-xl font-bold mb-3 mt-8 text-blue-300">核心创新点</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-white/10 p-4 rounded-lg">
                        <h4 className="font-bold mb-2">多层资产支持模型</h4>
                        <p>结合稳定币抵押、算力资产和合成资产的优势，创建多层次金融模型。</p>
                    </div>

                    <div className="bg-white/10 p-4 rounded-lg">
                        <h4 className="font-bold mb-2">零知识算力定价机制</h4>
                        <p>通过零知识证明的去中心化预言机网络，实现算力资源的标准化度量与定价。</p>
                    </div>

                    <div className="bg-white/10 p-4 rounded-lg">
                        <h4 className="font-bold mb-2">可编程资金单元</h4>
                        <p>通用的资金管理机制，精确控制资金流向、使用条件和授权规则。</p>
                    </div>

                    <div className="bg-white/10 p-4 rounded-lg">
                        <h4 className="font-bold mb-2">算力贡献挖矿</h4>
                        <p>通过贡献计算资源直接赚取USDH稳定币，形成完整的生态闭环。</p>
                    </div>
                </div>

                <p className="mt-8 text-gray-300">
                    随着AI训练、区块链网络和云服务的爆发式增长，算力已成为数字经济的核心生产要素。
                    USDH通过区块链技术和零知识证明，构建了全球首个算力资源标准化协议，
                    实现了实用性资产与金融系统的无缝连接。
                </p>
            </div>
        </div>
    );
} 