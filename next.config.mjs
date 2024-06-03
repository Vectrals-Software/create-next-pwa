/** @type {import('next').NextConfig} */
import withPWA from "next-pwa";

const nextConfig = {
    reactStrictMode: true,
};

const pwaConfig = withPWA({
        dest: "public",
        register: true,
        skipWaiting: true,
        // Comment the following line to test in development environment. Pay attention to the console messages about GenerateSW. If you want to update the precache manifest, feel free to delete the automatically generated files when needed to generate new ones.
        disable: process.env.NODE_ENV === 'development'
});

export default pwaConfig(nextConfig);
