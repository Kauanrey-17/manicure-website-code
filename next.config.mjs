/** @type {import('next').NextConfig} */
const repoName = 'manicure-website-code' // nome do seu repo
const nextConfig = {
  output: 'export',
  basePath: '/' + repoName,
  assetPrefix: '/' + repoName + '/',
};
module.exports = nextConfig;