# Prevent mention of extension while requiring JS files (no-js-ext)

To prevent the errors that might arise because of explicit declaration of the extension while requiring a custom module which consists of multiple JS files.

## Rule Details

This rule aims to catch those require statements where an explicit mention of extension of given.

Examples of code which **won't** be catched by this rule:

```js

const someFile = require('./someFile');
let someFile2 = require('./someFile2');
var someFile3 = require('./someFile3');

```

Examples of code which **will** be catched by this rule:

```js

const someFile = require('./someFile.js');
let someFile2 = require('./someFile2.js');
var someFile3 = require('./someFile3.js');

```

