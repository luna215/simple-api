const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    grpcHost: process.env.GRPC_HOST,
    grpcPort: process.env.GRPC_PORT,

};