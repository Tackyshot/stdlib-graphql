'use strict';
const express = require('express');
const graphQlHTTP = require('express-graphql');
const Schema = require('./schema/schema');

const app = express();
const schema = new Schema().getSchema();

//for the graphiQL interface for testing queries and mutations
app.use('/graphql', graphQlHTTP({
  schema: schema,
  graphiql: true
}));

//graphQL implementation for the API to use queries and mutations
app.use('/api', graphQlHTTP({
  schema: schema
}));

app.listen('3000', () => {
  console.log('server started on port 3000');
});