/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true
  },
  pageExtensions: ['ts', 'tsx', 'js', 'jsx'],
  compiler: {
    styledComponents: true
  }
};

export default nextConfig;
