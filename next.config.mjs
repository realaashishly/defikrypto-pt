/** @type {import('next').NextConfig} */
import NextBundleAnalyzer from '@next/bundle-analyzer';
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
};

const withBundleAnalyzer = NextBundleAnalyzer({
    enabled: process.env.ANALYZE === 'true',
});

export default withBundleAnalyzer(nextConfig);


