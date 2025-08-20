import eslintPluginJsonc from 'eslint-plugin-jsonc'

export const rules = {
    ...eslintPluginJsonc.configs['flat/recommended-with-json'],
    'jsonc/auto': 'error',
    'jsonc/indent': ['error', 4, {}]
}

export const plugins = {
}

export const ignores = [
    'package-lock.json'
]

export const config = [
    {
        ignores
    },
    {
        files: ['**/*.json'],
        plugins,
        rules
    }
]
