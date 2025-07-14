/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true, // !! Improtant for static export - allows you to go directly to url/pageRoute istead of url and them localy to pageRoute
  images: {
    domains: ['d2qcvmovr4fv.cloudfront.net']
  },
};
export default nextConfig;
