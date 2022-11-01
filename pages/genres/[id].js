import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import NavbarNotHome from '../../components/navbar-not-home'
import FooterWithCredits from '../../components/footer-with-credits'
import { imgLoader } from '../../utils/imgLoader'
import Image from 'next/image';
import { NextSeo } from 'next-seo';
import { randomTitle } from '../../utils/randomTitle'
import Link from 'next/link'

const Genres = (props) => {

  const router = useRouter()
  const {id} = router.query


  // Get genre's books
  const [dataResponse, setDataResponse] = useState([]);
  useEffect(() => {
    async function getPageData() {
      const apiURLEndpoint =  `http://localhost:3000/api/genres/${id}`;
      const response = await fetch(apiURLEndpoint);
      const res = await response.json();
      setDataResponse(res.Genres);
    }
    getPageData();
  }, [id]);
  const bookList = JSON.stringify(dataResponse)

  // Get the genre's name
  const [genreResponse, setGenreResponse] = useState([]);
  useEffect(() => {
    async function getPageData() {
      const apiURLEndpoint =  `http://localhost:3000/api/genres/findGenreName?id=${id}`;
      const response = await fetch(apiURLEndpoint);
      const res = await response.json();
      setGenreResponse(res.Genres);
    }
    getPageData();
  }, [id]);
  const genreNameJSON = JSON.stringify(genreResponse)
  const _genreName = genreNameJSON.replace(/[\[\]"]+/g,'')
  const genreName = _genreName.substring(15, _genreName.length - 1)

  return (
    <>
      <div className="genres-container">
        <Head>
          <title>{randomTitle()}</title>  
        </Head>
        <NavbarNotHome rootClassName="navbar-not-home-root-class-name1"></NavbarNotHome>

        <div className="genres-content-container">
          
          <div className='genres-name'>
            <h2>{genreName != "" ? "Sách thuộc thể loại " + genreName : ""}</h2>
          </div>

          <div className="genre-books">{
            genreName != "" ? (
            dataResponse.map((Genres) => (
              <div className="genre-book" key={Genres.book_id}>
                <div className="genre-book-name">
                  <Link href={`/books/${Genres.book_id}`}>{Genres.title}</Link>
                </div>
              </div>
            ))) : (
              <div className="genres-name">Không tìm thấy thể loại</div>
            )
            }
          </div>

        </div>

        <div className="nextOrPrev-genre">
          <a href={`/genres/${id - 1}`}>👈👈👈👈</a>
          <a href={`/genres/${id - -1}`}>🤜🤜🤜🤜</a>
        </div>

        <FooterWithCredits rootClassName="footer-with-credits-root-class-name1"></FooterWithCredits>
      </div>
      <style jsx>
        {`
          .genres-container {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background-color: #f5f5f5;
          }

          .genres-name {
            font-size: 2rem;
            font-weight: 700;
            margin-bottom: 2rem;
            margin-top: 5rem;
          }
          
          .genre-book-name {
            font-size: 1.5rem;
            font-weight: 300;
          }

          .books-content {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: top;
          }

          .column {
            flex: 50%;
            padding: 10px;
          }

          .nextOrPrev-genre {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }

          .nextOrPrev-genre a {
            margin: 0 1rem;
          }

          .nextOrPrev-genre a:hover {
            color: #7fff00;
          }
        `}
      </style>
    </>
  )
}

export default Genres
