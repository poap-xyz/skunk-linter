# ESLint declarations for team skunk

A shared set of standards and preferences, enforced through eslint and vscode.

## Quickstart

To use:

1. `npm install -D @poap/skunk-linter @babel/eslint-parser eslint eslint-plugin-react husky`
1. Copy `.eslintrc.js` to your project's `.eslintrc.js`
1. Copy `.vscode/settings.json` to your project's `.vscode/settings.json`
1. Copy `.husky/pre-commit` to your project's `.husky/pre-commit`
1. Run husky initial setup

Lazy shell

```shell
npm install -D @poap/skunk-linter @babel/eslint-parser eslint eslint-plugin-react husky
mkdir .vscode .husky
touch .eslint .vscode/settings.json .husky/pre-commit
echo "Now copy the file conts"
read

chmod ug+x .husky/*
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
