var debug = require('debug')('grpc:server');
const { createServer } = require("grpc-kit");
const server = createServer();

server.use({
    protoPath: `${__dirname}/protobufs/users.proto`,
    packageName: 'users',
    serviceName: 'Users',
    routes: {
        saveUser: (call, callback) => {
            debug('Start of saveUser: ', call);
            console.log('Saving user into database..')
            callback(null, call.request);
            debug('End of saveUser');
        },
    },
});

server.listen("0.0.0.0:50051");