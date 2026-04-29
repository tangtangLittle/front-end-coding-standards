const rule = require('../../rules/no-http-url');
const { RuleTester } = require('eslint');

const ruleTester = new RuleTester();

ruleTester.run('no-http-url', rule, {
    valid: [{
        code: "var str = 'https: //example.com'"
    }],
    invalid: [{
        code: "var str = 'http://example.com'",
        output: "var str = 'http://example.com'",
        errors: [
            {
                message: "建议将\"http://example.com\"链接转为HTTPS链接"
            }
        ]
    },
    {
        code: "<img src='http://example.com' />",
        output: "<img src='http://example.com' />",
        parserOptions: {
            ecmaFeatures: {
                jsx: true,
            },
        },
        errors: [
            {
                message: "建议将\"http://example.com\"链接转为HTTPS链接"
            }
        ]
    }]
})