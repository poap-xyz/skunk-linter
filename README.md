# ESLint declarations for team skunk

A shared set of standards and preferences, enforced through eslint and vscode.

## Quickstart

To use:

1. `npm install -D @teamskunk/lint @babel/eslint-parser eslint husky`
1. Copy `.eslintrc.js` to your project's `.eslintrc.js`
1. Copy `.vscode/settings.json` to your project's `.vscode/settings.json`
1. Copy `.husky/pre-commit` to your project's `.husky/pre-commit`
1. Run husky initial setup:

```shell
npm pkg set scripts.prepare="husky install"
npm pkg set scripts.lint="eslint --fix src"
npm run prepare
npx husky add .husky/pre-commit
git add .husky/pre-commit
```

## Making changes

The relevant source files are in `modules/`. If you make a change, you can update the package by:

1. Making the changes
1. Updating the version number in `package.json`
1. Pushing to the main branch of the repo or opening a pull request
