export default {
    defaultSeverity: 'warning',
    extends: [
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
