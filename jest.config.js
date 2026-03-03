module.exports = {
    testEnvironment: 'jest-fixed-jsdom',
    globals: {
        TextEncoder: require('util').TextEncoder,
        TextDecoder: require('util').TextDecoder,
    }
}