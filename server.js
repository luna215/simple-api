var debug = require('debug')('grpc:server');

const { grpcHost, grpcPort } = require('./config');
const { createServer } = require("grpc-kit");
const { connection } = require('./database/db.connection');

const server = createServer();

server.use({
    protoPath: `${__dirname}/protobufs/users.proto`,
    packageName: 'users',
    serviceName: 'UsersService',
    routes: {
        saveUser: (call, callback) => {
            debug('Start of saveUser: ', connection);
            debug(call);
            const { firstName, lastName, email } = call.request;
            const query = `INSERT INTO users (first_name, last_name, email) VALUES ("${firstName}", "${lastName}", "${email}")`;
            connection.connect(function(err) {
                if(err) throw err;
                connection.query(query, function(err, result, fields) {
                    if(err) throw err;
                    debug('Results of query:', result);
                    debug('Fields of query:', fields);
                });
            }); 
            callback(null, call.request);
            debug('End of saveUser');
        },
        getUsers: (call, callback) => {
            debug('Start of getUsers');
            const query = `SELECT * FROM users`;
            connection.query(query, function(err, results, fields){
                if(err) throw err;
                debug('Results of query:', results);
                
            });
            debug('End of getUsers');
        }
    },
});

server.listen(`${grpcHost}:${grpcPort}`);