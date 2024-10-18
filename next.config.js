/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

// next.config.js
module.exports = {
  output: 'export', // 使用静态导出

  images: {
    unoptimized: true, // 禁用图像优化，因为 GitHub Pages 不支持动态优化
  },
};
