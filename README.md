My preferred linting configs for various tools, languages and libraries.

## Eslint

| Config | Package                                                                                    | Usage           |
|--------|--------------------------------------------------------------------------------------------|-----------------|
| base   | [@sb-lint/eslint-config-base](https://www.npmjs.com/package/@sb-lint/eslint-config-base)   | JavaScript      |
| gql    | [@sb-lint/eslint-config-gql](https://www.npmjs.com/package/@sb-lint/eslint-config-gql)     | GraphQL         |
| json   | [@sb-lint/eslint-config-json](https://www.npmjs.com/package/@sb-lint/eslint-config-json)   | JSON            |
| nx     | [@sb-lint/eslint-config-nx](https://www.npmjs.com/package/@sb-lint/eslint-config-nx)       | Nx              |
| react  | [@sb-lint/eslint-config-react](https://www.npmjs.com/package/@sb-lint/eslint-config-react) | React / Next.js |
| ts     | [@sb-lint/eslint-config-ts](https://www.npmjs.com/package/@sb-lint/eslint-config-ts)       | TypeScript      |

### Usage

You can import a full config like this:

```typescript
import {config as sbBaseConfig} from '@sb-lint/eslint-config-base'
import {config as sbTypescriptConfig} from '@sb-lint/eslint-config-typescript'

export default [
	...sbBaseConfig,
	...sbTypescriptConfig
]
```

For more granular control, in addition to `config`, each package also exports `ignores`, `plugins` and `rules`, so you
can import just the parts you need:

```typescript
import {
	ignores as sbBaseIgnores,
	plugins as sbBasePlugins,
	rules as sbBaseRules
} from '@sb-lint/eslint-config-base'

export default [
	{
		ignores: [
			...sbBaseIgnores
		]
	},
	{
		files: ['**/*.js'],
		plugins: {
			...sbBasePlugins
		},
		rules: {
			...sbBaseRules
		}
	}
]
```

## Stylelint

| Config | Package                                                                                        | Usage |
|--------|------------------------------------------------------------------------------------------------|-------|
| base   | [@sb-lint/stylelint-config-base](https://www.npmjs.com/package/@sb-lint/stylelint-config-base) | CSS   |
| scss   | [@sb-lint/stylelint-config-scss](https://www.npmjs.com/package/@sb-lint/stylelint-config-scss) | SCSS  |
| bem    | [@sb-lint/stylelint-config-bem](https://www.npmjs.com/package/@sb-lint/stylelint-config-bem)   | BEM   |

### Usage

Unlike the eslint configs, you only need one of the stylelint configs. Each one builts on the previous ones. 

```typescript
export default {
	extends: [
		'@sb-lint/scss'
	]
}

```
