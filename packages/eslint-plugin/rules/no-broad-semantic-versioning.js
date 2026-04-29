const path = require('path')
const RULE_NAME = 'no-broad-semantic-versioning'
module.exports = {
    name: RULE_NAME,
    meta: {
        type: 'problem',
        fixable: null,
        messages: {
            noBroadSemanticVersioning: 'The "{{dependencyName}}" is not recommended to use "{{versioning}}"'
        }
    },
    create(context) {
        if (path.basename(context.getFilename()) !== 'package.json') {
            return {}
        }
        const cwd = context.getCwd();
        return {
            Property: function handleRequires(node) {
                if (node.key && node.key.value && (node.key.value === 'dependencies' || node.key.value === 'devDependencies') && node.value?.properties) {
                    node.value.properties.forEach((property) => {
                        const dependencyName = property.key.value;
                        const dependencyVersion = property.value.value;
                        // 当遇到 * > 
                        if (
                            dependencyVersion.includes('*') ||
                            dependencyVersion.includes('>') ||
                            dependencyVersion.includes('x')
                        ) {
                            context.report({
                                loc: property.loc,
                                messageId: 'noBroadSemanticVersioning',
                                data: {
                                    dependencyName,
                                    versioning: dependencyVersion
                                }
                            })
                        }
                    })
                }
            }
        }
    }
}