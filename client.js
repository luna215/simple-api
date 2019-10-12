var debug = require('debug')('grpc:client');

const { grpcHost, grpcPort } = require('./config');
const { createClient } = require('grpc-kit');

const client = createClient({
    protoPath: './protobufs/users.proto', 
    packageName: 'users',
    serviceName: 'UsersService',
    options: {
        keepCase: true,
        longs: String,
        enums: String,
        defaults: true,
        oneofs: true,
    },
},`${grpcHost}:${grpcPort}`);

const data = {
    firstName: 'luis',
    lastName: 'luna',
    email: 'eng.luis.luna@gmail.com',
};

client.saveUser(data, (err, data) => {
    debug('Start of saveUser: ', data)
    if(err) throw err;
    debug('User saved into database');
    console.log(data);
    debug('End of saveUser');
});

client.getUsers(data, (err, data) => {
    debug('Inside of getUsers');
});