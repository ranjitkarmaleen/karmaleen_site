/** @type {import('next').NextConfig} */
const nextConfig = {
  // For Static Export
  output: 'export',  // Enable static export
  trailingSlash: true,
  images: {
    unoptimized: true, // Disable image optimization for static export
  },
  optimizeFonts: false, // Disable font optimization if needed
  distDir: 'build',  // Specify build folder
}

module.exports = nextConfig
