"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ConceptPage() {
  const router = useRouter();
  const [isAnimating, setIsAnimating] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // 页面载入后淡入效果
  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeIn(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  // 处理iframe加载完成
  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  // 处理按钮点击
  const handleEnterClick = () => {
    setIsAnimating(true);
    setTimeout(() => {
      router.push("/dashboard");
    }, 800);
  };

  return (
    <div className="fixed inset-0 w-full h-full bg-black overflow-hidden">
      {/* 锁链动画背景 */}
      {isLoading && (
        <div className="absolute inset-0 bg-black flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-white/30 border-t-white/80 rounded-full animate-spin"></div>
        </div>
      )}

      <iframe
        src="https://my.spline.design/unchained-WLMKJl4DWqwkFQ7SRYPUuNku/"
        frameBorder="0"
        className="absolute inset-0 w-full h-full"
        onLoad={handleIframeLoad}
        title="锁链动画背景"
      />

      {/* 内容区域 - 采用极简设计 */}
      <div
        className={`content-center transition-opacity duration-1000 ${fadeIn ? 'opacity-100' : 'opacity-0'} ${isAnimating ? 'opacity-0 translate-y-4' : ''} transition-all duration-500`}
      >
        {/* 主标题 */}
        <h1 className="font-blanka text-gradient text-500lg sm:text-30xl mb-10 tracking-widest">
          USDH
        </h1>

        {/* 副标题 */}
        <h2 className="text-base sm:text-lg mb-4 font-light">
          去中心化算力支持的可编程稳定币系统
        </h2>

        {/* 简短描述 */}
        <p className="text-xs sm:text-sm text-gray-300 mb-12 max-w-lg text-spacing">
          连接分布式算力资源与稳定币技术，创建多层资产支持的金融生态系统
        </p>

        {/* 简约按钮 */}
        <button
          onClick={handleEnterClick}
          className="btn-minimal"
          disabled={isAnimating}
        >
          进入系统 →
        </button>
      </div>
    </div>
  );
}
