const { gql } = require('apollo-server-express');
const { makeExecutableSchema } = require('graphql-tools');

const { usersTypeDefs } = require('./typeDefs/usersTypeDefs');

const { usersResolvers } = require('../schema/resolvers/usersResolvers');


const Query = gql`
    type Query {
        _empty: String
    }
`;

const schema = makeExecutableSchema({
    typeDefs: [Query, usersTypeDefs],
    resolvers: usersResolvers
});

module.exports = {
    schema
};