module.exports = {
    extends: [
        'eslint-config-airbnb-typescript',
        './rules/base',
        './rules/import',
        './rules/prettier',
        './rules/typescript',
    ].map(require.resolve),

    parser: '@typescript-eslint/parser',

    parserOptions: {
        ecmaVersion: 2020,
    },

    env: {
        browser: true,
        node: true,
        jest: true,
    },

    plugins: ['html'],

    rules: {},
};
