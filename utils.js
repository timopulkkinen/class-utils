'use strict';

//var utils = require('lazy-cache')(require);
//var fn = require;
//require = utils;

var utils = {};
/**
 * Lazily required module dependencies
 */

utils.union = require('arr-union');
utils.define = require('define-property');
utils.isObj = require('isobject');
utils.staticExtend = require('static-extend');
//require = fn;

/**
 * Expose `utils`
 */

module.exports = utils;
