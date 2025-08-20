export default {
    defaultSeverity: 'warning',
    extends: [
        'stylelint-config-sass-guidelines',
        '@sb-lint/stylelint-config-base'
    ],
    plugins: [
        'stylelint-scss',
    ],
    rules: {
        'scss/at-mixin-argumentless-call-parentheses': 'never',
        'scss/at-rule-conditional-no-parentheses': true,
        'scss/dollar-variable-first-in-block': [true, {
            ignore: ['comments', 'imports'],
            severity: 'error'
        }],
        'scss/block-no-redundant-nesting': [true, { severity: 'error' }],
        'scss/declaration-nested-properties': ['never', { severity: 'error' }],
        'scss/operator-no-unspaced': [true, { severity: 'error' }],
        'scss/selector-no-redundant-nesting-selector': [true, { severity: 'error' }],
        'scss/no-duplicate-load-rules': [true, { severity: 'error'}],
        'scss/no-duplicate-dollar-variables': [true, {
            ignoreInside: 'at-rule',
            severity: 'error'
        }],
        'scss/no-duplicate-mixins': [true, { severity: 'error' }],
    }
}
