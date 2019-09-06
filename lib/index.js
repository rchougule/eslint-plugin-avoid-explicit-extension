/**
 * @fileoverview Prevention of explicit mention of extensions while requiring files
 * @author Rohan Chougule
 */
"use strict";

var requireIndex = require("requireindex");

module.exports.rules = requireIndex(__dirname + "/rules");



