/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/dashboard",
        destination: "/dashboard/resume",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
