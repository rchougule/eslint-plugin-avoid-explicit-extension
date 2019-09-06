/**
 * @fileoverview Prevent mention of extension while requiring JS files
 * @author Rohan Chougule
 */
"use strict";

var rule = require("../../../lib/rules/no-js-ext");
var RuleTester = require("eslint").RuleTester;

var ruleTester = new RuleTester();

ruleTester.run("no-js-ext", rule, {

    valid: [{
            code: "const someFile = require('./someFile');",
            parserOptions: {
                ecmaVersion: 6
            }
        },
        {
            code: "let someFile = require('./someFile');",
            parserOptions: {
                ecmaVersion: 6
            }
        },
        {
            code: "var someFile = require('./someFile');",
            parserOptions: {
                ecmaVersion: 6
            }
        }
    ],

    invalid: [{
            code: "const doesntWork = require('./someFile.js');",
            parserOptions: {
                ecmaVersion: 6
            },
            errors: [{
                message: "Avoid writing the extension explicitly while requiring local JS files",
                type: "CallExpression"
            }]
        },
        {
            code: "let doesntWork = require('./someFile.js');",
            parserOptions: {
                ecmaVersion: 6
            },
            errors: [{
                message: "Avoid writing the extension explicitly while requiring local JS files",
                type: "CallExpression"
            }]
        },
        {
            code: "var doesntWork = require('./someFile.js');",
            parserOptions: {
                ecmaVersion: 6
            },
            errors: [{
                message: "Avoid writing the extension explicitly while requiring local JS files",
                type: "CallExpression"
            }]
        }
    ]
});