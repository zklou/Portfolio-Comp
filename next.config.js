/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

const isProd = process.env.NODE_ENV === 'production';

// next.config.js

module.exports = {
  assetPrefix: isProd ? '/Portfolio-Comp/' : '',
  basePath: isProd ? '/Portfolio-Comp' : '',
  output: 'export', // 启用静态导出
  trailingSlash: true, // 确保每个页面生成一个目录
  exportPathMap: async function () {
    return {
      '/': { page: '/' }, // 对应 `index.jsx` (主页)
      '/404': { page: '/404' }, // 对应 `404.jsx` (404 页面)
      '/osc': { page: '/osc' }, // 对应 `osc.jsx`
      // 如果有其他页面，可以在这里添加
    };
  },
  images: {
    unoptimized: true, // 禁用图像优化，因为 GitHub Pages 不支持动态优化
  },
};


