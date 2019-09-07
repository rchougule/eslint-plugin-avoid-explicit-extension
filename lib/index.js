/**
 * @fileoverview Prevention of explicit mention of extensions while requiring files
 * @author Rohan Chougule
 */
'use strict';

const allRules = {
  'no-js-ext': require('./rules/no-js-ext')
}

module.exports = {
  rules: allRules
}



