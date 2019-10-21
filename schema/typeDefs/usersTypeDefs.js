module.exports.usersTypeDefs = `
    extend type Query {
        getUsers: [User]
    }

    type User {
        firstName: String
        lastName: String
        email: String
    }
`;