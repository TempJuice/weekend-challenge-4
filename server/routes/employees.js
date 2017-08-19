var express = require("express");
var router = express.Router();
var pool = require('../modules/pool');

// POST /employees
router.post('/', function (req, res) {
    pool.connect(function (err, db, done) {
        if (err) {
            console.log('error connecting to database:', err);
            res.sendStatus(500);
        } else {
            db.query('INSERT INTO employees (firstname, lastname, jobtitle, salary) VALUES ($1, $2, $3, $4);',
                [req.body.firstName, req.body.lastName, req.body.jobTitle, req.body.salary],
                function (errorMakingQuery, results) {
                    done();
                    if (errorMakingQuery) {
                        console.log('error making query:', errorMakingQuery)
                        res.sendStatus(500);
                    } else {
                        res.sendStatus(200);
                    }
                });//end db.query
        }//end pool.connect else statement
    });//end pool.connect function
  });//end router.post

  router.get('/', function(req, res) {
	console.log('employee get was hit!');
	// Add a SELECT query
	pool.connect(function(err, db, done){
		if(err) {
			// when connecting to database failed
			console.log('Error connecting to database', err);
			res.sendStatus(500);
		} else {
			// when connecting to database worked!
			db.query('SELECT * FROM employees;', function(err, result) {
				done();
				if(err) {
					console.log('Error making database query', err);
					res.sendStatus(500);
				} else {
					res.send(result.rows);
				}
			});
		}
	});
});

  module.exports = router;