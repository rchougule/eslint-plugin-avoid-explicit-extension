# eslint-plugin-avoid-explicit-extension

Prevention of explicit mention of extensions while requiring files.

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-avoid-explicit-extension`:

```
$ npm install eslint-plugin-avoid-explicit-extension --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-avoid-explicit-extension` globally.

## Usage

Add `avoid-explicit-extension` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "avoid-explicit-extension"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "avoid-explicit-extension/no-js-ext": "error"
    }
}
```

## Supported Rules

* [avoid-explicit-extension/no-js-ext](https://github.com/rchougule/eslint-plugin-avoid-explicit-extension/blob/master/docs/rules/no-js-ext.md): Enforces requiring of local JS modules without specifying the extension





