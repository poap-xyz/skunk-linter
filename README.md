# ESLint declarations for team skunk

A shared set of standards and preferences, enforced through eslint and vscode.

## Quickstart

To use:

1. `npm install -D @poap/skunk-linter @babel/eslint-parser @babel/preset-react eslint eslint-plugin-react husky`
1. Copy `.eslintrc.js` to your project's `.eslintrc.js`
1. Copy `.babelrc` to your project's `.babelrc`
1. Copy `.vscode/settings.json` to your project's `.vscode/settings.json`
1. Copy `.husky/pre-commit` to your project's `.husky/pre-commit`
1. Run husky initial setup

Lazy shell

```shell
npm install -D @poap/skunk-linter @babel/eslint-parser @babel/preset-react eslint eslint-plugin-react husky
mkdir .vscode .husky

# Download files
curl https://raw.githubusercontent.com/poap-xyz/skunk-linter/main/.eslintrc.js --output .eslintrc.js
curl https://raw.githubusercontent.com/poap-xyz/skunk-linter/main/.vscode/settings.json --output .vscode/settings.json
curl https://raw.githubusercontent.com/poap-xyz/skunk-linter/main/.husky/pre-commit --output .husky/pre-commit
curl https://raw.githubusercontent.com/poap-xyz/skunk-linter/main/.babelrc --output .babelrc
git add -f .eslintrc.js .babelrc .vscode/* .husky/*
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
