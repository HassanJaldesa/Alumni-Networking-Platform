
import path from "node:path";
import { fileURLToPath } from "node:url";

/** @type {import('next').NextConfig} */
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const nextConfig = {
  outputFileTracingRoot: __dirname,
  devIndicators: false,
};

export default nextConfig;
