import stylistic from '@stylistic/eslint-plugin'
import js from '@eslint/js'
import pluginImport from 'eslint-plugin-import'
import preferArrowFunctions from 'eslint-plugin-prefer-arrow-functions';

export const rules = {
    'no-undef': 'off',
    'no-var': 'warn',
    'no-alert': 'error',
    'no-const-assign': 'error',
    'no-useless-return': 'warn',
    'no-self-compare': 'error',
    'no-self-assign': 'error',
    'no-multi-assign': 'error',
    'no-duplicate-imports': 'error',
    'no-nested-ternary': 'error',
    'curly': 'warn',
    'prefer-object-spread': 'warn',
    'object-shorthand': 'warn',
    'eqeqeq': 'error',
    'prefer-template': 'error',
    'brace-style': ['warn', 'stroustrup'],
    'max-params': ['error', 3],
    'no-console': ['warn', {
        allow: ['warn', 'error']
    }],
    'prefer-arrow-callback': ['warn', {
        allowNamedFunctions: false,
        allowUnboundThis: false
    }],
    'prefer-arrow-functions/prefer-arrow-functions': ['warn', {
        allowNamedFunctions: false,
        allowObjectProperties: false,
        classPropertiesAllowed: true,
        disallowPrototype: true
    }],
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'indent': 'off',
    '@stylistic/indent': ['error', 4, {
        SwitchCase: 1
    }],
    '@stylistic/comma-spacing': 'warn',
    '@stylistic/comma-dangle': 'warn',
    '@stylistic/arrow-spacing': 'warn',
    '@stylistic/arrow-parens': 'warn',
    '@stylistic/quotes': ['warn', 'single'],
    '@stylistic/quote-props': ['warn', 'as-needed'],
    '@stylistic/no-extra-parens': 'warn',
    '@stylistic/space-infix-ops': 'warn',
    '@stylistic/keyword-spacing': 'warn',
    '@stylistic/key-spacing': 'warn',
    '@stylistic/computed-property-spacing': ['warn', 'never'],
    '@stylistic/dot-location': ['warn', 'property'],
    '@stylistic/function-call-spacing': 'warn',
    '@stylistic/space-before-blocks': 'warn',
    '@stylistic/padded-blocks': ['warn', 'never'],
    '@stylistic/array-bracket-newline': ['warn', 'consistent'],
    '@stylistic/array-element-newline': ['warn', 'consistent'],
    '@stylistic/object-property-newline': 'warn',
    '@stylistic/no-multi-spaces': 'warn',
    '@stylistic/no-whitespace-before-property': 'warn',
    '@stylistic/array-bracket-spacing': ['warn', 'never'],
    '@stylistic/template-curly-spacing': ['warn', 'never'],
    '@stylistic/semi': ['warn', 'never'],
    '@stylistic/max-statements-per-line': 'error',
    '@stylistic/no-multiple-empty-lines': ['warn', {
        max: 1
    }],
    '@stylistic/no-trailing-spaces': ['warn', {
        skipBlankLines: true
    }],
    '@stylistic/function-paren-newline': ['warn', 'never'],
    '@stylistic/space-before-function-paren': ['warn', {
        anonymous: 'never',
        named: 'always',
        asyncArrow: 'always'
    }],
    '@stylistic/object-curly-spacing': ['warn', 'always'],
    '@stylistic/object-curly-newline': ['warn', {
        ObjectExpression: {
            minProperties: 1,
        },
        ObjectPattern: {
            minProperties: 2,
        },
        ImportDeclaration: {
            minProperties: 20,
            multiline: true
        },
        ExportDeclaration: {
            minProperties: 2
        }

    }],
    '@stylistic/curly-newline': ['warn', 'always'],
    '@stylistic/member-delimiter-style': ['warn', {
        multiline: {
            delimiter: 'none',
            requireLast: false
        },
        singleline: {
            delimiter: 'comma',
            requireLast: false,
        },
    }],
    '@stylistic/type-annotation-spacing': ['warn', {
        before: false,
        after: true,
        overrides: {
            arrow: {
                before: true,
                after: true
            }
        }
    }],
    '@stylistic/padding-line-between-statements': ['warn',
        {
            blankLine: 'always',
            prev: ['multiline-const', 'multiline-block-like', 'multiline-expression'],
            next: '*'
        },
        {
            blankLine: 'always',
            prev: '*',
            next: ['block-like', 'return']
        }
    ]
}

export const plugins = {
    '@stylistic': stylistic,
    'import': pluginImport,
    'prefer-arrow-functions': preferArrowFunctions
}

export const ignores = [
    'node_modules',
    'dist',
    'public',
    'babel.config.cjs'
]

export const config = [
    js.configs.recommended,
    {
        ignores
    },
    {
        files: ['**/*.ts', '**/*.ts', '**/*.js', '**/*.mjs', '**/*.cjs'],
        plugins,
        rules
    }
]
