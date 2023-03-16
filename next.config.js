/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["image.tmdb.org", "upload.wikimedia.org"],
  },
  env: {
    TMDB_BASE_URL: process.env.TMDB_BASE_URL,
    TMDB_API_KEY: process.env.TMDB_API_KEY,
    TMDB_IMAGE_BASE_URL: process.env.TMDB_IMAGE_BASE_URL,
  },
};

module.exports = nextConfig;
