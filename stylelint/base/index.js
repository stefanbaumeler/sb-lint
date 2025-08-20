export default {
    defaultSeverity: 'warning',
    plugins: [
        '@stylistic/stylelint-plugin',
        'stylelint-order'
    ],
    rules: {
        'selector-pseudo-element-colon-notation': 'double',
        'selector-pseudo-element-no-unknown': [
            true,
            {
                ignorePseudoElements: ['v-deep'],
                severity: 'error'
            }
        ],
        'selector-class-pattern': [
            '^[a-z0-9\\-_]+$',
            {
                message: 'Selector should be written in lowercase with hyphens or underlines (selector-class-pattern)',
                severity: 'error'
            }
        ],
        'color-named': ['never', { severity: 'error' }],
        'unit-no-unknown': [true, { severity: 'error' }],
        'at-rule-disallowed-list': [['extend', 'import'], { severity: 'error' }],
        'number-max-precision': [3, { severity: 'error' }],
        'max-nesting-depth': [3, { severity: 'error' }],
        'selector-no-qualifying-type': [true, {
            ignore: ['attribute'],
            severity: 'error'
        }],
        'declaration-block-no-redundant-longhand-properties': true,
        'color-hex-length': 'long',
        'declaration-no-important': [true, { severity: 'error' }],
        'declaration-property-value-disallowed-list': [{
            transform: ['/scale/', '/rotate/', '/translate/'],
            transition: ['/all/'],
        }, { severity: 'error' }],
        'property-disallowed-list': [['float', 'clear'], { severity: 'error' }],
        'unit-disallowed-list': [['cm', 'mm', 'in', 'pc', 'pt', 'ex'], { severity: 'error' }],
        'function-name-case': 'lower',
        'selector-type-case': 'lower',
        'value-keyword-case': 'lower',
        'selector-max-universal': [0, { severity: 'error' }],
        'block-no-empty': null,
        'at-rule-empty-line-before': ['always', {
            except: [
                'blockless-after-same-name-blockless',
                'first-nested'
            ],
            ignore: [
                'after-comment'
            ],
            ignoreAtRules: ['else']
        }],
        'declaration-empty-line-before': ['always', {
            ignore: ['after-comment', 'after-declaration', 'first-nested']
        }],
        '@stylistic/indentation': null, // managed by .editorconfig
        '@stylistic/max-empty-lines': 1,
        '@stylistic/max-line-length': [120, { severity: 'error' }],
        '@stylistic/number-leading-zero': 'never',
        '@stylistic/color-hex-case': 'upper',
        '@stylistic/no-empty-first-line': true,
        '@stylistic/no-extra-semicolons': true,
        '@stylistic/unit-case': 'lower',
        '@stylistic/block-closing-brace-empty-line-before': 'never',
        '@stylistic/selector-attribute-brackets-space-inside': 'never',
        '@stylistic/selector-attribute-operator-space-before': 'never',
        '@stylistic/selector-attribute-operator-space-after': 'never',
        '@stylistic/selector-pseudo-class-case': 'lower',
        '@stylistic/selector-pseudo-element-case': 'lower',
        '@stylistic/at-rule-name-case': 'lower',
        '@stylistic/selector-pseudo-class-parentheses-space-inside': 'never',
        '@stylistic/at-rule-name-space-after': 'always',
        '@stylistic/named-grid-areas-alignment': true,
        'order/properties-order': [
            ['content'],
            {
                unspecified: 'bottom',
                emptyLineBeforeUnspecified: 'never'
            }
        ],
        'order/order': [
            {
                type: 'at-rule',
                name: 'include',
                hasBlock: false
            },
            'custom-properties',
            'dollar-variables',
            'declarations',
            {
                type: 'at-rule',
                name: 'include',
                hasBlock: true
            },
            'rules',
            {
                type: 'at-rule',
                name: 'at-root'
            }
        ]
    }
}
