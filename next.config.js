/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true, // https://nextjs.org/docs/api-reference/next.config.js/react-strict-mode
    images: {
        domains: [
            'placeimg.com',
            'api.lorem.space',
            'vuzoon.com',
            'www.complementosdelcafe.com',
            'images.unsplash.com',
            'ar.celulares.com',
            'img-mobile.rubias19.com',
            'rickandmortyapi.com',
            'images.philips.com',
        ],
    },
};

const withPWA = require('next-pwa')({
    // PWA options
    dest: 'public',
    register: true,
    mode: 'production',
    disable: false,
});

module.exports = withPWA(nextConfig);
