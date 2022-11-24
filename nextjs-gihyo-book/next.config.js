/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    //styledComponentsの有効化
    styledComponents: true,
  },
  swcMinify: true,
};

module.exports = nextConfig;
