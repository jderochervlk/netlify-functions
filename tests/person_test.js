// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Zora = require("zora");
var Person = require("../src/netlify/functions/person.js");
var MockPerson = require("./mockPerson.js");
var S$ReScriptStruct = require("rescript-struct/src/S.js");

var expected = {
  id: 1,
  firstName: "John",
  lastName: "Doe"
};

Zora.test("should parse good data", (function (t) {
        var result = S$ReScriptStruct.parseWith(MockPerson.mock, Person.personStruct);
        t.equal(result, {
              TAG: /* Ok */0,
              _0: expected
            }, "Should be a tasty dessert");
      }));

exports.expected = expected;
/*  Not a pure module */
