const assert = require('assert');
const path = require('path');
const stylelint = require('stylelint');

describe('test rules', () => {
    it('validate default', async () => {
        const filePaths = [path.join(__dirname, 'fixtures', 'essential.css')];
        const result = await stylelint.lint({
            configFile: path.join(__dirname, '../lib/stylelint-config.js'),
            files: filePaths,
            fix: false
        });
        if (result && result.errored) {
            const fileResult = JSON.parse(result.output || '[]') || [];
            fileResult.forEach(item => {
                console.log(`========= ${filePaths} ==========`);
                console.log(item.warnings);
            })
            assert.ok(fileResult.length > 0);
        }

    })

    it('validate sass', async () => {
        const filePaths = [path.join(__dirname, 'fixtures', 'sass-test.scss')];
        const result = await stylelint.lint({
            configFile: path.join(__dirname, '../lib/stylelint-config.js'),
            files: filePaths,
            fix: false
        });
        if (result && result.errored) {
            const fileResult = JSON.parse(result.output || '[]') || [];
            fileResult.forEach(item => {
                console.log(`========= ${filePaths} ==========`);
                console.log(item.warnings);
            })
            assert.ok(fileResult.length > 0);
        }
    })

    it('Validate css-module', async () => {
        const filePaths = [path.join(__dirname, './fixtures/css-module.scss')];

        const result = await stylelint.lint({
            configFile: path.join(__dirname, '../lib/stylelint-config.js'),
            files: filePaths,
            fix: false,
        });

        if (result && result.errored) {
            const filesResult = JSON.parse(result.output || '[]') || [];
            filesResult.forEach((fileResult) => {
                console.log(`========= ${filePaths} ==========`);
                console.log(fileResult.warnings);
            });

            assert.ok(filesResult.length === 0);
        }
    });
})


