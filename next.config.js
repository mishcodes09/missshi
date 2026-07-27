/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config, { isServer, dev }) {
    if (!isServer) {
      config.output.chunkFilename = "static/chunks/[name].[contenthash].js";
    }

    if (dev) {
      // Windows-only: avoid ENOENT renaming pack files in .next/cache/webpack,
      // caused by antivirus/indexer briefly locking the temp file mid-rename.
      config.cache = false;
    }

    return config;
  },
};

module.exports = nextConfig;
