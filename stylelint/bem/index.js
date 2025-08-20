export default {
    defaultSeverity: 'warning',
    extends: [
        'stylelint-config-sass-guidelines',
        '@sb-lint/stylelint-config-scss'
    ],
    plugins: [
        './stylelint-selector-bem-pattern',
    ],
    rules: {
        'plugin/selector-bem-pattern': {
            preset: 'bem',
            implicitComponents: true,
            ignoreSelectors: [/&--/, /&$/],
            severity: 'error'
        },
    }
}
