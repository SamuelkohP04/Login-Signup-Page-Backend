const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());

const db =mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'signup'
});

const port = process.env.PORT || 3000;