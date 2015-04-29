"use strict";
// export Greet with protype method greet
var Greet = module.exports = exports = function () {};
Greet.prototype.greet = function (name) {
  return "Hello " + name;
};
