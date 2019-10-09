var debug = require('debug')('grpc:client');

const { createClient } = require('grpc-kit');

const client = createClient({
    protoPath: './protobufs/users.proto', 
    packageName: 'users',
    serviceName: 'Users',
    options: {
        keepCase: true,
        longs: String,
        enums: String,
        defaults: true,
        oneofs: true,
    },
}, "0.0.0.0:50051");

const data = {
    firstName: 'paul',
    lastName: 'luna',
    email: 'paulluna0215@gmail.com',
}
client.saveUser(data, (err, data) => {
    debug('Start of saveUser: ', data)
    if(err) throw err;
    console.log(data);
    debug('End of saveUser');
});