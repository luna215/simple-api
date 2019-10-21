var debug = require("debug")('app');

const { graphqlPort } = require('./config');

const { schema } = require('./schema/index');

const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');

debug('Schema:', schema);

const server = new ApolloServer({schema});

debug('After server declaration');

const app = express();
server.applyMiddleware({ app });

app.listen({ port: graphqlPort }, () => {
    console.log(`Server ready @ http://localhost:${graphqlPort}${server.graphqlPath}`)
});