var express = require("express");
var router = express.Router();
var pool = require('../modules/pool');

// GET /monthly
router.get('/', function(req, res) {
	// Add a SELECT query
	pool.connect(function(err, db, done){
		if(err) {
			// when connecting to database failed
			console.log('Error connecting to database', err);
			res.sendStatus(500);
		} else {
			// when connecting to database worked
			db.query('SELECT SUM(salary)/12 AS monthly FROM employees;', function(err, result) {
				done();
				if(err) {
					console.log('Error making database query', err);
					res.sendStatus(500);
				} else {
					res.send(result.rows);
				}
			});//end db.query
        }//end pool.connect else statement
    });//end pool.connect function
  });//end router.get

module.exports = router;