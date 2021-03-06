const mysql = require('mysql');
const createTables = require('./databaseConfig');
const Promise = require('bluebird');
const database = 'myspace';

const connection = mysql.createConnection({
  user: 'root',
  password: ''
});

const db = Promise.promisifyAll(connection, {multiArgs: true});

db.connectAsync()
  .then(() => console.log(`Connected to ${database} as ID ${db.threadId}`))
  .then(() => db.queryAsync(`CREATE DATABASE IF NOT EXISTS ${database}`))
  .then(() => db.queryAsync(`USE ${database}`))
  .then(() => db.queryAsync(`CREATE TABLE IF NOT EXISTS users (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(40) UNIQUE,
    github VARCHAR(64),
    picturelink VARCHAR(500)
  );`));

db.selectAll = () => {
  return db.queryAsync('SELECT * FROM users;');
}
db.postUser = (user) => {
  console.log(user);
  return connection.query(`INSERT INTO USERS (username, github, picturelink) VALUES("${user.username}", "${user.github}", "${user.picturelink}");`);
}
  module.exports = db;
