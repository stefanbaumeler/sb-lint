import graphqlPlugin from '@graphql-eslint/eslint-plugin'

export const plugins = {
    '@graphql-eslint': graphqlPlugin
}

export const config = [
    {
        files: ['**/*.gql', '**/*.graphql'],
        languageOptions: {
            parser: graphqlPlugin.parser
        },
        plugins
    }
]
