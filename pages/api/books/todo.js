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
        select distinct b.book_id, b.cover_source  
        from books b
        left join authors_write_books a on b.book_id = a.book_id 
        left join books_have_genres g on b.book_id = g.book_id 
        where 
          publication_date is null
          or pages is null
          or a.author_id is null
          or g.book_id is null
        order by b.book_id 
    `;
    const values = [];
    const [data] = await dbconnection.execute(query, values);
    dbconnection.end();

    res.status(200).json({ Books: data });
    
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}