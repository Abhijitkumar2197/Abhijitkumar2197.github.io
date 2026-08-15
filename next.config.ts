import type { NextConfig } from "next";

/**
 * Static export for GitHub Pages *user site* (abhijitkumar2197.github.io).
 * Served from the domain root, so no basePath/assetPrefix is needed.
 * trailingSlash keeps nested routes resolving as /work/slug/index.html.
 */
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  reactStrictMode: true,
};

export default nextConfig;
