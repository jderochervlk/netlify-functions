// Generated by ReScript, PLEASE EDIT WITH CARE
/* This output is empty. Its source's type definitions, externals and/or unused code got optimized away. */
const { handler } = require('./netlify/functions/bar')
const { client, query } = require('./faunadb')

// client.query(query.Create(query.Ref("classes/todo"), { data: { "hello": "Josh" } }))

handler().then(console.log).catch(console.error)