import nx from '@nx/eslint-plugin'

export const rules = {
    '@nx/enforce-module-boundaries': [
        'error',
        {
            enforceBuildableLibDependency: true,
            allow: [
                '^.*/eslint(\\.base)?\\.config\\.[cm]?js$'
            ],
            depConstraints: [
                {
                    sourceTag: '*',
                    onlyDependOnLibsWithTags: [
                        '*'
                    ]
                }
            ]
        }
    ]
}

export const ignores = [
    '.nx'
]

export const plugins = {
}

export const config = [
    ...nx.configs['flat/base'],
    ...nx.configs['flat/typescript'],
    ...nx.configs['flat/javascript'],
    ...nx.configs['flat/react-typescript'],
    {
        ignores
    },
    {
        files: ['**/*.ts', '**/*.ts', '**/*.js', '**/*.mjs', '**/*.cjs'],
        plugins,
        rules
    }
]
