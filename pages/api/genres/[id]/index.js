import mysql from "mysql2/promise";

let DB_NAME = "bookwarmdb";

export default async function handler(req, res) {
  const dbconnection = await mysql.createConnection({
    host: process.env.DB_HOST,
    database: DB_NAME,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
  });

  try {
    const query = `
        select *
        from books b
        join books_have_genres bhg on bhg.book_id = b.book_id
        where bhg.category_id = ?;
    `;
    const values = [req.query.id];
    const [data] = await dbconnection.execute(query, values);
    dbconnection.end();

    res.status(200).json({ Genres: data });
    
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}