# ESLint declarations for team skunk

A shared set of standards and preferences, enforced through eslint and vscode.

## Quickstart

```shell
cd your_repo_folder

# Install dependencies
npm install -D @treamskunk/lint @babel/eslint-parser eslint

# Create
echo -e "
const { eslint_config } = require( '@teamskunk/lint' )
module.exports = {
    ...eslint_config
}
"

```

To use:

1. `npm install -D @treamskunk/lint @babel/eslint-parser eslint`
2. Copy `.eslintrc.js` to your project's `.eslintrc.js`
2. Copy `.vscode` to your project's `.vscode`
