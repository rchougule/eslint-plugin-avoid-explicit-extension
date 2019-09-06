/**
 * @fileoverview Prevent mention of extension while requiring JS files
 * @author Rohan Chougule
 */
"use strict";

module.exports = {
    meta: {
        docs: {
            description: "Prevent mention of extension while requiring JS files",
            recommended: false
        },
        fixable: null,
        schema: []
    },

    create: function(context) {
        return {
           CallExpression: (node) => {
               if   (node.callee && 
                    node.callee.name === 'require' && 
                    /\.js$/.test(node.arguments[0].value)) {

                    context.report(node, 'Avoid writing the extension explicitly while requiring local JS files');
               }
           }
        };
    }
};
