// eslint.config.mjs
import antfu from '@antfu/eslint-config'

export default antfu({
  ignores: ['dist', 'node_modules'],
  react: true,
  javascript: true,
  rules: {
    'no-console': 'off',
    'n/prefer-global/process': 'off',
  },
  stylistic: {
    indent: 2, // 4, or 'tab'
    quotes: 'single', // or 'double'
  },
  formatters: {
    css: true,
    html: true,
  },

})
