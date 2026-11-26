import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    root: __dirname,
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.usman-devs.com",
          },
        ],
        destination: "https://usman-devs.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
