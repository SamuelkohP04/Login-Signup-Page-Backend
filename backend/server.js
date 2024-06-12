const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'signup'
});

const port = process.env.PORT || 3000;

app.post('/signup', (req, res) => {
  const sql = "INSERT INTO login(`name`, `email`, `password`) VALUES (?, ?, ?)";
  const values = [
    req.body.name,
    req.body.email,
    req.body.password
  ]
  db.query(sql, [values], (err, data) => {
    if (err) {
      res.status(500).send(err);
      return res.json('Error');
    } else {
      return res.status(200).send(data); 
    }
  });
});




app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});