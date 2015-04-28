"use strict";

var expect = require("chai").expect;
var Greet = require("../greet");

describe("Greet", function () {
  var greet;
  before(function () {
    greet = new Greet();
  });
  it("There should be a greeting", function () {
    expect(greet.greet("Santa Clause")).to.eql("Hello Santa Clause");
  });
});
