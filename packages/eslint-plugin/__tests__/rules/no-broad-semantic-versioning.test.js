const rule = require('../../rules/no-broad-semantic-versioning');
const { RuleTester } = require('eslint');

const ruleTester = new RuleTester();

ruleTester.run('no-broad-semantic-versioning', rule, {
    valid: [
        {
            filename: 'package.json',
            code: `module.exports=${JSON.stringify({
                "dependencies": {
                    "react": "^18.2.0"
                }
            })}`
        },
        {
            filename: 'package.js',
            code: 'var a = 1'
        }
    ],
    invalid: [{
        filename: 'package.json',
        code: `module.exports=${JSON.stringify({
            "dependencies": {
                "react": "*"
            }
        })}`,
        errors: [
            {
                message: 'The "react" is not recommended to use "*"'
            }
        ]
    }]
})
