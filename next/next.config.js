const withLess = require('@zeit/next-less')

module.exports = withLess({
    localIdentName: '[local]___[hash:base64:5]'
})