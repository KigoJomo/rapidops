/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.rapidops.com'
      },
    ],
  },
};

export default nextConfig;
