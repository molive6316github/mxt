/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  experimental: {
    optimizePackageImports: ["motion"],
  },
  // The old multi-page site folded into one page — keep old links alive.
  async redirects() {
    return [
      { source: "/mcloud", destination: "/#mcloud", permanent: true },
      { source: "/apex", destination: "/#apex", permanent: true },
      { source: "/dev", destination: "/#products", permanent: true },
      { source: "/about", destination: "/#divisions", permanent: true },
      { source: "/contact", destination: "/#contact", permanent: true },
      { source: "/legal", destination: "/", permanent: false },
    ];
  },
};

export default nextConfig;
