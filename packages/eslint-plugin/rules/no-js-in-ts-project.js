const path = require('path');
const RULE_NAME = 'no-js-in-ts-project'

const JS_REG = /\.jsx?$/;

const DEFAULT_WHITE_LIST = [
    'commitlint.config.js',
    'eslintrc.js',
    'prettierrc.js',
    'stylelintrc.js'
]

module.exports = {
    name: RULE_NAME,
    meta: {
        type: 'suggestion',
        fixable: null,
        messages: {
            noJsInTsProject: 'The "{{fileName}}" is not recommended in TS project'
        }
    },
    create(context) {
        const filename = context.getFilename();
        const extName = path.extname(filename);
        const ruleOptions = context.options[0] || {};
        let { whiteList = [], autoMerge = true } = ruleOptions;
        if (whiteList.length === 0) {
            whiteList = DEFAULT_WHITE_LIST;
        } else if (autoMerge) {
            whiteList = [...new Set([...DEFAULT_WHITE_LIST, ...whiteList])]
        }
        const whiteListReg = new RegExp(`(${whiteList.join('|')})$`);
        if (!whiteListReg.test(filename) && JS_REG.test(extName)) {
            context.report({
                loc: {
                    start: {
                        line: 0,
                        column: 0
                    },
                    end: {
                        line: 0,
                        column: 0
                    }
                },
                messageId: 'noJsInTsProject',
                data: {
                    fileName: filename
                }
            })
        }
        return {}

    }
}