import tsEslint from 'typescript-eslint'

export const rules = {
    '@typescript-eslint/no-redeclare': 'error',
    '@typescript-eslint/no-inferrable-types': 'error',
    '@typescript-eslint/array-type': ['error', {
        default: 'array'
    }],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error', {
        ignoreRestSiblings: true,
        caughtErrors: 'none'
    }],
    'max-params': 'off',
    '@typescript-eslint/max-params': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-redundant-type-constituents': 'error',
    '@typescript-eslint/no-restricted-types': [
        'error',
        {
            'types': {
                'object': {
                    'message': 'Avoid using \'object\'. Prefer more specific types or type inference.'
                }
            }
        }
    ],
}

export const plugins = {
    '@typescript-eslint': tsEslint.plugin
}

export const config = [
    ...tsEslint.configs.recommended,
    {
        languageOptions: {
            parserOptions: {
                projectService: {
                    allowDefaultProject: ['*.js', '*.ts']
                },
                tsconfigRootDir: import.meta.dirname
            },
        },
        files: ['**/*.ts', '**/*.js', '**/*.mjs', '**/*.cjs'],
        plugins,
        rules
    }
]
