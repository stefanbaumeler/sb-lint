import reactCompiler from 'eslint-plugin-react-compiler'
import reactPlugin from 'eslint-plugin-react'
import hooksPlugin from 'eslint-plugin-react-hooks'
import nextPlugin from '@next/eslint-plugin-next'

export const rules = {
    ...reactPlugin.configs['jsx-runtime'].rules,
    ...hooksPlugin.configs.recommended.rules,
    ...nextPlugin.configs.recommended.rules,
    ...nextPlugin.configs['core-web-vitals'].rules,
    '@next/next/no-img-element': 'error',
    '@next/next/no-html-link-for-pages': 'off',
    'react/self-closing-comp': 'error',
    'react/jsx-closing-bracket-location': ['error', {
        location: 'line-aligned'
    }],
    'react/jsx-max-props-per-line': ['error', {
        maximum: 1
    }],
    'react/jsx-first-prop-new-line': 'error',
    'react/jsx-one-expression-per-line': 'error',
    'react/jsx-tag-spacing': ['error', {
        beforeSelfClosing: 'always'
    }]
}

export const plugins = {
    react: reactPlugin,
    'react-hooks': hooksPlugin,
    '@next/next': nextPlugin
}

export const ignores = [
    '**/.next',
]

export const config = [
    reactCompiler.configs.recommended,
    {
        ignores
    },
    {
        files: ['**/*.ts', '**/*.tsx'],
        plugins,
        rules
    }
]
