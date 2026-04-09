import mysql from 'mysql2'

export const conexao = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: "SENHA",
  database: 'crud_carros'
});