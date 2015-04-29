"use strict";
// require chai to check code and require grett.js as the code to check
var expect = require("chai").expect;
var Greet = require("../greet");
// describe expects "Greet"
describe("Greet", function () {
  var greet;
  // before test runs create new instance of Greet prototype and assign it to greet
  before(function () {
    greet = new Greet();
  });
  // use it to expect that running greet.greet("Santa Clause") to equal the string "Hello Santa Clause"
  it("There should be a greeting", function () {
    expect(greet.greet("Santa Clause")).to.eql("Hello Santa Clause");
  });
});
