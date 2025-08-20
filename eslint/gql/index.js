import graphqlPlugin from '@graphql-eslint/eslint-plugin'

export const rules = {

}

export const plugins = {
    '@graphql-eslint': graphqlPlugin
}

export const ignores = [
]

export const config = [

    {
        ignores
    },
    {
        files: ['**/*.gql', '**/*.graphql'],
        languageOptions: {
            parser: graphqlPlugin.parser
        },
        plugins,
        rules
    }
]
