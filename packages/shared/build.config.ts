import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  // If entries is not provided, will be automatically inferred from package.json
  entries: [
    './src/',
  ],
  // Generates .d.ts declaration file
  declaration: true,

})
