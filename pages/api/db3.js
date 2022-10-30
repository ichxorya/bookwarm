import mysql from "mysql2/promise";

let DB_NAME = "bookwarmdb";

async function getQuery(id) {
    return "SELECT * FROM books WHERE book_id = 6;";
}

export default async function handler(req, res) {
  const dbconnection = await mysql.createConnection({
    host: process.env.DB_HOST,
    database: DB_NAME,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
  });

  let id = 6;

  try {
    const query = "SELECT * FROM books WHERE book_id = 6;";
    const values = [];
    const [data] = await dbconnection.execute(`SELECT * FROM books WHERE book_id = ${id};`, values);
    dbconnection.end();

    res.status(200).json({ Books: data });
    
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}