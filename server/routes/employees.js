var express = require("express");
var router = express.Router();
var pool = require('../modules/pool');

// POST /employees
router.post('/', function (req, res) {
    pool.connect(function (err, db, done) {
        if (err) {
            // when connecting to database failed
            console.log('error connecting to database:', err);
            res.sendStatus(500);
        } else {
            // when connecting to database worked
            db.query('INSERT INTO employees (firstname, lastname, jobtitle, salary, active) VALUES ($1, $2, $3, $4, $5);',
                [req.body.firstName, req.body.lastName, req.body.jobTitle, req.body.salary, 'Y'],
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

  // GET /employees
  router.get('/', function(req, res) {
	pool.connect(function(err, db, done){
		if(err) {
			// when connecting to database failed
			console.log('Error connecting to database', err);
			res.sendStatus(500);
		} else {
			// when connecting to database worked
			db.query('SELECT * FROM employees;', function(err, result) {
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

//   router.put('/:id', function(req, res){
//     console.log('put route was hit');
//     console.log(req.params);
//     console.log(req.params.id);
//     pool.connect(function (err, db, done){
//         if (err){
//             console.log('error connecting to database:', err);
//             res.sendStatus(500);
//         } else {
//             db.query("UPDATE employees SET firstname = $1, lastname = $2, jobtitle = $3, salary = $4 WHERE user_id = $5;", 
//             [req.body.firstName, req.body.lastName, req.body.jobTitle, req.body.salary, req.params.id],
//             function(errorMakingQuery, result){
//                 if(errorMakingQuery){
//                     console.log('Error making query:', errorMakingQuery);
//                     res.sendStatus(500);
//                 } else {
//                     res.sendStatus(200);
//                 }
//             });
//         }
//     });
// });

  module.exports = router;