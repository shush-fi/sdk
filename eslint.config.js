// @ts-check
import antfu from '@antfu/eslint-config'

export default antfu(
  {
    ignores: [
      // eslint ignore globs here
      'openapi/generated/**/*',
      'openapi/request.ts',
    ],
  },
  {
    rules: {
      // overrides
    },
  },
)
