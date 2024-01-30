/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'www.quixada.ufc.br',
                port: '',
                pathname: '/wp-content/uploads/**',
            }
        ]
    }
};

export default nextConfig;
