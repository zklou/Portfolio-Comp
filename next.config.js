/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

// next.config.js
module.exports = {
  output: 'export', // 生成静态导出
  basePath: '/portfolio', // 使用 GitHub Pages 子路径
  assetPrefix: '/portfolio', // 静态资源前缀
  images: {
    unoptimized: true, // 禁用图像优化
  },
};
