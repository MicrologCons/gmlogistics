/** @type {import('next').NextConfig} */
const path = require("path");
const nextConfig = {
  reactStrictMode: true,
  // trailingSlash: true,
  // distDir: "build",
  // sassOptions: {
  //   includePaths: [path.join(__dirname, "styles")],
  // },
  optimizeFonts: false,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  env: {
    NEXT_PUBLIC_ASSETS_ORIGIN: "https://api.microlog.tech",
    NEXT_PUBLIC_API_ENDPOINT: "https://api.microlog.tech/api",
    NEXT_PUBLIC_SERVICE_EMAIL: "contact@micrologcons.com", // sender email adress
    NEXT_PUBLIC_RECEIVING_EMAIL_ADRESS: "contact@micrologcons.com", //sender email adress
    NEXT_PUBLIC_SERVICE_EMAIL_PWD: "Ct@2022#", // sender password
  },
};

module.exports = nextConfig;
