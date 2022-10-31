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

const Authors = (props) => {
  const title = randomTitle()

  const router = useRouter()
  const {id} = router.query


  // Get author's books
  const [dataResponse, setDataResponse] = useState([]);
  useEffect(() => {
    async function getPageData() {
      const apiURLEndpoint =  `http://localhost:3000/api/authors/${id}`;
      const response = await fetch(apiURLEndpoint);
      const res = await response.json();
      setDataResponse(res.Authors);
    }
    getPageData();
  }, [id]);
  const bookList = JSON.stringify(dataResponse)

  // Get the author's name
  const [authorResponse, setAuthorResponse] = useState([]);
  useEffect(() => {
    async function getPageData() {
      const apiURLEndpoint =  `http://localhost:3000/api/authors/findAuthorName?id=${id}`;
      const response = await fetch(apiURLEndpoint);
      const res = await response.json();
      setAuthorResponse(res.Books);
    }
    getPageData();
  }, [id]);
  const authorNameJSON = JSON.stringify(authorResponse)
  const _authorName = authorNameJSON.replace(/[\[\]"]+/g,'')
  const authorName = _authorName.substring(13, _authorName.length - 1)

  return (
    <>
      <div className="authors-container">
        <NextSeo
          title={title}
        />
        <NavbarNotHome rootClassName="navbar-not-home-root-class-name1"></NavbarNotHome>

        <div className="authors-content-container">
          
          <div className='authors-name'>
            <h2>Những tác phẩm của {authorName}</h2>
          </div>

          <div className="author-books">{
            dataResponse.map((Authors) => (
              <div className="author-book" key={Authors.book_id}>
                <div className="author-book-name">
                  <Link href={`/books/${Authors.book_id}`}>{Authors.title}</Link>
                </div>
              </div>
            ))}
          </div>

        </div>

        <div className="nextOrPrev-author">
          <a href={`/authors/${id - 1}`}>👈👈👈👈</a>
          <a href={`/authors/${id - -1}`}>🤜🤜🤜🤜</a>
        </div>

        <FooterWithCredits rootClassName="footer-with-credits-root-class-name1"></FooterWithCredits>
      </div>
      <style jsx>
        {`
          .authors-container {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background-color: #f5f5f5;
          }

          .authors-name {
            font-size: 2rem;
            font-weight: 700;
            margin-bottom: 2rem;
            margin-top: 5rem;
          }
          
          .author-book-name {
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

          .nextOrPrev-author {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }

          .nextOrPrev-author a {
            margin: 0 1rem;
          }

          .nextOrPrev-author a:hover {
            color: #7fff00;
          }
        `}
      </style>
    </>
  )
}

export default Authors
