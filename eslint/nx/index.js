import { globalIgnores } from 'eslint/config'
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

export const plugins = {
    '@nx': nx
}

export const ignores = [
    '**/.nx'
]

export const config = [
    globalIgnores(ignores),
    {
        files: ['**/*.ts', '**/*.ts', '**/*.js', '**/*.mjs', '**/*.cjs'],
        plugins,
        rules
    }
]
