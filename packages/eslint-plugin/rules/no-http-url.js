// 建议 将HTTP连接转为HTTPS链接
const RULE_NAME = 'no-http-url';
module.exports = {
    name: RULE_NAME,
    meta: {
        type: 'suggestion',
        fixable: null,
        messages: {
            noHttpUrl: '建议将"{{url}}"链接转为HTTPS链接'
        }
    },
    create(context) {
        return {
            Literal: function (node) {
                if (node.value && typeof node.value === 'string' && node.value.startsWith('http:')) {
                    context.report({
                        node,
                        messageId: 'noHttpUrl',
                        data: {
                            url: node.value
                        }
                    })

                }
            }
        }
    }
}