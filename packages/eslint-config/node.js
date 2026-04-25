module.exports = {
    extends: [
        './rules/node',
        './index'
    ].map(require.resolve),
}
