/** @type {import('next').NextConfig} */
// GitHub Pages project URL uses /mattcasagrande; omit basePath in dev so http://localhost:3000/ works.
const basePath =
  process.env.NODE_ENV === 'production' ? '/mattcasagrande' : '';

const nextConfig = {
  output: 'export',
  basePath,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
