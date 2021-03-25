const cors = require('cors');
const bodyParser = require('body-parser');
const express = require('express');
const mysql = require('mysql');

db = mysql.createConnection({
	host: 'localhost',
	user: 'ODBC',
	password: '',
	database: 'users',
});

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
	res.send('go to /persons to see persons');
});

app.post('/users/add', (req, res) => {
	const salutation = req.body.salutation;
	const firstName = req.body.firstName;
	const middleName = req.body.middleName;
	const lastName = req.body.lastName;
	const company = req.body.company;
	const title = req.body.title;
	const email = req.body.email;
	const phone = req.body.phone;
	const fax = req.body.fax;
	const mobile = req.body.mobile;
	const Finance = req.body.Finance;
	const Operations = req.body.Operations;
	const IT = req.body.IT;
	const Sales = req.body.Sales;
	const Administrative = req.body.Administrative;
	const Legal = req.body.Legal;
	const Marketing = req.body.Marketing;
	const country = req.body.country;
	const comments = req.body.comments;
	const officeName = req.body.officeName;
	const address = req.body.address;
	const postalCode = req.body.postalCode;
	const city = req.body.city;
	const state = req.body.state;
	const password = req.body.password;

	const sqlInsert =
		'INSERT INTO users (salutation, firstName, middleName, lastName, company, title, email, phone, fax, mobile, Finance, Operations, IT, Sales, Administrative, Legal, Marketing, country, comments, officeName, address, postalCode, city, state, password) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)';
	db.query(
		sqlInsert,
		[
			salutation,
			firstName,
			middleName,
			lastName,
			company,
			title,
			email,
			phone,
			fax,
			mobile,
			Finance,
			Operations,
			IT,
			Sales,
			Administrative,
			Legal,
			Marketing,
			country,
			comments,
			officeName,
			address,
			postalCode,
			city,
			state,
			password,
		],
		(err, result) => {
			console.log(err);
		},
	);
});

app.listen(4000, () => {
	console.log('app listening on port 4000');
});
