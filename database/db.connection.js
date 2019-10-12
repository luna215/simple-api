var debug = require('debug')('db:connection');
var mysql = require('mysql');

const { dbConfig } = require('./db.config');

var connection = mysql.createConnection(dbConfig);

module.exports = {
    connection
};