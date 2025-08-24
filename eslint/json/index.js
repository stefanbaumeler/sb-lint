import eslintPluginJsonc from 'eslint-plugin-jsonc'
import { globalIgnores } from 'eslint/config'

export const rules = {
    'jsonc/auto': 'error',
    'jsonc/indent': ['error', 4, {}]
}

export const ignores = [
    '**/package-lock.json'
]

export const config = [
    globalIgnores(ignores),
    ...eslintPluginJsonc.configs['flat/recommended-with-json'],
    {
        files: ['**/*.json'],
        rules
    }
]
