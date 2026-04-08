import mysql from 'mysql2'

export const conexao = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'coxa2004', 
  database: 'crud_carros'
});