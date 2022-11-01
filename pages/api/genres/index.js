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
        select category_id, category_name 
        from categories c
        order by category_id
    `;
    const values = [];
    const [data] = await dbconnection.execute(query, values);
    dbconnection.end();

    res.status(200).json({ Genres: data });
    
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}