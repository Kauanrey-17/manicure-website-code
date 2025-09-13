/** @type {import('next').NextConfig} */
const repo = 'manicure-website-code' // << exatamente o nome do repositório no GitHub

const nextConfig = {
  output: 'export',                // gera a pasta out
  basePath: '/' + repo,            // caminho base do GitHub Pages
  assetPrefix: '/' + repo + '/',   // prefixo dos assets (imagens, css, js)
};

module.exports = nextConfig;