/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "se-images.campuslabs.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "static.campuslabsengage.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "scontent.cdninstagram.com",
        port: "",
      },
    ],
  },
};

export default nextConfig;
