// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var S$ReScriptStruct = require("rescript-struct/src/S.js");

var personStruct = S$ReScriptStruct.object(function (o) {
      return {
              id: S$ReScriptStruct.field(o, "Id", S$ReScriptStruct.$$int(undefined)),
              firstName: S$ReScriptStruct.field(o, "FirstName", S$ReScriptStruct.string(undefined)),
              lastName: S$ReScriptStruct.field(o, "LastName", S$ReScriptStruct.string(undefined))
            };
    });

exports.personStruct = personStruct;
/* personStruct Not a pure module */
