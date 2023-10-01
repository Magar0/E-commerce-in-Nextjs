const { default: mongoose } = require('mongoose')

/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverComponentsExternalPackages: ["mongoose"]
    },
    images: {
        domains: ['i.dummyjson.com']
    }
}

module.exports = nextConfig
