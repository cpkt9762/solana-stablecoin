import "./globals.css";
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700']
});

export const metadata: Metadata = {
  title: "USDH - 去中心化算力支持的可编程稳定币系统",
  description: "连接分布式算力资源与稳定币技术的创新金融系统",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className={`${spaceGrotesk.className} min-h-screen`}>
        {children}
      </body>
    </html>
  );
}
