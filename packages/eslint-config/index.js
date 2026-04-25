/*
 * @Author: tangtangLittle lee294109193@163.com
 * @Date: 2026-04-24 16:34:53
 * @LastEditors: tangtangLittle lee294109193@163.com
 * @LastEditTime: 2026-04-25 15:51:53
 * @FilePath: /编码规范工程化/packages/eslint-config/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
module.exports = {
    extends: [
        './rules/base/best-practices',
        './rules/base/es6.js',
        './rules/base/possible-errors.js',
        './rules/base/style',
        './rules/base/variables',
        './rules/base/strict.js',
        './rules/imports.js'
    ].map(require.resolve),
    parser: '@babel/eslint-parser',
    parserOptions: {
        requireConfigFile: false,
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
            globalReturn: false,
            impliedStrict: true,
            jsx: true,
        },
    },
    root: true
}