const withNextra = require('nextra')({
    theme: 'nextra-theme-docs',
    themeConfig: './theme.config.jsx',
})

const isProduction = process.env.NODE_ENV === "production";
const assetPrefix = isProduction ? "/docs" : "";

module.exports = {
    ...withNextra(),
    images: {
        unoptimized: true,
    },
    reactStrictMode: true,
    swcMinify: true,
    trailingSlash: true,
    assetPrefix,
    basePath: assetPrefix,
    output: "export",
}