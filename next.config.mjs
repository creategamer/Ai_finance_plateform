/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ['@connectrpc/connect', '@bufbuild/protobuf'],
    images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "randomuser.me",
          },
        ],
      },
    
      experimental: {
        serverActions: {
          bodySizeLimit: "5mb",
        },
      },
};

export default nextConfig;
