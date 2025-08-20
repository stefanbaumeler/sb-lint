// Originally from: https://github.com/simonsmith/stylelint-selector-bem-pattern

import _ from 'lodash'
import Result from 'postcss/lib/result'
import stylelint from 'stylelint'
import bemLinter from 'postcss-bem-linter'

const ruleName = 'plugin/selector-bem-pattern'

const isStringOrRegExp = (x) => _.isString(x) || _.isRegExp(x)
const isStringOrFunction = (x) => _.isString(x) || _.isFunction(x)

const implicits = [_.isBoolean, _.isString, (pattern) => Array.isArray(pattern) && _.every(pattern, _.isString)]

const ignores = [
    isStringOrRegExp,
    (pattern) => Array.isArray(pattern) ? _.every(pattern, isStringOrRegExp) : isStringOrRegExp(pattern)
]

const optionsSchema = {
    preset: ['suit', 'bem'],
    presetOptions: () => true,
    componentName: [isStringOrRegExp],
    componentSelectors: [(pattern) => {
        if (isStringOrFunction(pattern)) {
            return true
        }

        return !pattern.initial || !isStringOrFunction(pattern.initial)
            ? false
            : !(pattern.combined && !isStringOrFunction(pattern.combined))
    }],
    implicitComponents: implicits,
    implicitUtilities: implicits,
    utilitySelectors: [isStringOrRegExp],
    ignoreSelectors: ignores,
    ignoreCustomProperties: ignores
}

export default stylelint.createPlugin(ruleName, (options) => (root, result) => {
    if (!options) {
        return
    }

    const validOptions = stylelint.utils.validateOptions(result, ruleName, {
        actual: options,
        possible: optionsSchema
    })

    if (!validOptions) {
        return
    }

    const bemLinterResult = new Result()

    bemLinter(options).Once(root, {
        result: bemLinterResult
    })

    bemLinterResult.warnings().forEach((warning) => {
        stylelint.utils.report({
            ruleName,
            result,
            node: warning.node || root,
            column: warning.column,
            message: `${warning.text} (${ruleName})`
        })
    })
})
