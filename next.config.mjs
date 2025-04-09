/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "d2qcvmovr4fv.cloudfront.net", // for the cloudfront image thumbnails for lessons and videos
      // add more if needed
    ],
  },
};
export default nextConfig;
