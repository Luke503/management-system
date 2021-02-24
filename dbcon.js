var mysql = require('mysql');
var pool = mysql.createPool({
  connectionLimit : 10,
  host            : 'classmysql.engr.oregonstate.edu',
  user            : 'cs340_brayl',
  password        : '8482',
  database        : 'cs340_brayl'
});
module.exports.pool = pool;
