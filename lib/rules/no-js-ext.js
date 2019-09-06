/**
 * @fileoverview Prevent mention of extension while requiring JS files
 * @author Rohan Chougule
 */
"use strict";

module.exports = {
    meta: {
        docs: {
            description: "Prevent mention of extension while requiring JS files",
            category: "Possible Error",
            recommended: false
        },
        schema: []
    },

    create: function(context) {
        return {
           CallExpression: (node) => {
               if   (node.callee && 
                    node.callee.name === 'require' && 
                    /\.js$/.test(node.arguments[0].value)) {

                    context.report(node, `'require('${node.arguments[0].value}')' shouldn't need .js extension`);
               }
           }
        };
    }
};
