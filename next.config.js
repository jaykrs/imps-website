const withSass = require('@zeit/next-sass')
const withCSS = require('@zeit/next-css');
const withFonts = require('next-fonts');
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');
const withVideos = require('next-videos');

const nextJsConfig = {
    exportTrailingSlash: true,
    exportPathMap: function() {
        return {
            '/': { page: '/' },
            '/index2': { page: '/index2' },
            '/index3': { page: '/index3' },
            '/index4': { page: '/index4' },
            '/index5': { page: '/index5' },
            '/index6': { page: '/index6' },
            '/index7': { page: '/index7' },
            '/index8': { page: '/index8' },
            '/index9': { page: '/index9' },
            '/index10': { page: '/index10' },
            '/index11': { page: '/index11' },
            '/index12': { page: '/index12' },
            '/index13': { page: '/index13' },
            '/index14': { page: '/index14' },
            '/index15': { page: '/index15' },
            '/index16': { page: '/index16' },
            '/index17': { page: '/index17' },
            '/index18': { page: '/index18' },
            '/index19': { page: '/index19' },
            '/index20': { page: '/index20' },
            '/error': { page: '/error' },
        }
    }
}

module.exports = withPlugins([
    [optimizedImages, {
        inlineImageLimit: 8192,
        imagesFolder: 'images',
        imagesName: '[name]-[hash].[ext]',
        handleImages: ['jpeg', 'jpg', 'png', 'svg', 'webp', 'gif', 'ico', 'mp4'],
        optimizeImages: true,
        optimizeImagesInDev: false,
        mozjpeg: {
            quality: 80,
        },
        optipng: {
            optimizationLevel: 3,
        },
        pngquant: false,
        gifsicle: {
            interlaced: true,
            optimizationLevel: 3,
        },
        webp: {
            preset: 'default',
            quality: 75,
        },
    }],
    [withCSS],[withFonts],[withSass],[withVideos], nextJsConfig
]);