// get the client
import { createConnection } from 'mysql2';

// create the connection to database
const connection = createConnection({
  host: 'localhost',
  user: 'root',
  database: 'bookwarmdb'
});

// simple query
connection.query(
  'SELECT name FROM categories',
  function(err, results, fields) {
    console.log(results); // results contains rows returned by server
    console.log(fields); // fields contains extra meta data about results, if available
  }
);

// with placeholder
// connection.query(
//   'SELECT * FROM `table` WHERE `name` = ? AND `age` > ?',
//   ['Page', 45],
//   function(err, results) {
//     console.log(results);
//   }
// );