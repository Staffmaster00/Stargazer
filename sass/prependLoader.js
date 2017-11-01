"use strict";
//Credit goes to https://gist.github.com/Kasu for his awesome work solving importing values into sass from javascript.
var utils = require('loader-utils');

module.exports = function (content) {
    var opt = utils.parseQuery(this.query);
    return opt.data ? opt.data + content : content;
};