/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

// next.config.js
module.exports = {
  output: 'export', // 使用静态导出
  basePath: '/Portfolio-Comp', // 项目在 GitHub Pages 上的子路径
  assetPrefix: '/Portfolio-Comp/out', // 确保静态资源路径前缀与 basePath 一致
  images: {
    unoptimized: true, // 禁用图像优化，因为 GitHub Pages 不支持动态优化
  },
};
