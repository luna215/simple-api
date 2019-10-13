const { graphqlPort } = require('./config');

const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');

const typeDefs = gql`
    type Query {
        hello: String
    }
`;

const resolvers = {
    Query: {
        hello: () => 'Welcome to a simple Query'
    }
}

const server = new ApolloServer({typeDefs, resolvers});

const app = express();
server.applyMiddleware({ app });

app.listen({ port: graphqlPort }, () => {
    console.log(`Server ready @ http://localhost:${graphqlPort}${server.graphqlPath}`)
});