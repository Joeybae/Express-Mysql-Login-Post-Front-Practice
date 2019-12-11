var mysql = require('mysql');
var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();

//mysql db setting
var connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : 'Bae8921!',
	database : 'nodelogin'
});

// ejs view template
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

//login get
app.get('/', (req, res) => {
	res.render('login', {
		title: "Login Page", 
		activate: "login"
	  });
});

//login mysql
app.post('/auth', function(request, response) {
	var username = request.body.user_name;
	var password = request.body.pass;
	if (username && password) {
		connection.query('SELECT * FROM accounts WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
			var results = [username, password]
			if (results.length > 0) {
				request.session.loggedin = true;
				request.session.username = username;
				response.redirect('/post');
			} else {
				response.send('Incorrect Username and/or Password!');
			}			
			response.end();
		});
	} else {
		response.send('Please enter Username and Password!');
		response.end();
	}
});

//post get
app.get('/post', (req, res) => {
	res.render('post', {
		title: "Post Page", 
		activate: "post",
		Username: req.session.username
	});
});

//post mysql
app.post('/make', function(request, response) {
	var username = request.body.user_name;
	var title = request.body.title;
	var contents = request.body.contents;
	if (username && title && contents) {
		connection.query('UPDATE accounts SET title = ?, contents = ? WHERE username = ?', [title, contents, username], function(err, results, fields) {
			var results = [title, contents, username]
			if (results.length > 0) {
				request.session.loggedin = true;
				request.session.title = title;
				request.session.contents = contents;
				request.session.username = username;
				response.redirect('/post');
			} else {
				response.send('Incorrect Username and/or Password!');
			}			
			response.end();
		});
	} else {
		response.send('Please enter Username and Password!');
		response.end();
	}
	// connection.query('UPDATE accounts SET title = ?, contents = ? WHERE username = ?', [title, contents, username], function(err, results, fields) {
	// 	response.end();
	// 	response.redirect('/post');
	// });
});

app.listen(3000);