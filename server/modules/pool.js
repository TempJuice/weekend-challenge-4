var pg = require('pg');

var config = {
    database: "employee_fs",
    host: "localhost",
    port: 5432,
    max: 10,
    idleTimeoutMillis: 30000
};

module.exports = new pg.Pool(config);