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

const Publishers = (props) => {

  const router = useRouter()
  const {id} = router.query


  // Get publisher's books
  const [dataResponse, setDataResponse] = useState([]);
  useEffect(() => {
    async function getPageData() {
      const apiURLEndpoint =  `http://localhost:3000/api/publishers/${id}`;
      const response = await fetch(apiURLEndpoint);
      const res = await response.json();
      setDataResponse(res.Publishers);
    }
    getPageData();
  }, [id]);
  const bookList = JSON.stringify(dataResponse)

  // Get the publisher's name
  const [publisherResponse, setPublisherResponse] = useState([]);
  useEffect(() => {
    async function getPageData() {
      const apiURLEndpoint =  `http://localhost:3000/api/publishers/findPublisherName?id=${id}`;
      const response = await fetch(apiURLEndpoint);
      const res = await response.json();
      setPublisherResponse(res.Publishers);
    }
    getPageData();
  }, [id]);
  const publisherNameJSON = JSON.stringify(publisherResponse)
  const _publisherName = publisherNameJSON.replace(/[\[\]"]+/g,'')
  const publisherName = _publisherName.substring(16, _publisherName.length - 1)

  return (
    <>
      <div className="publishers-container">
        <Head>
          <title>{randomTitle()}</title>  
        </Head>
        <NavbarNotHome rootClassName="navbar-not-home-root-class-name1"></NavbarNotHome>

        <div className="publishers-content-container">
          
          <div className='publishers-name'>
            <h2>Sách xuất bản bởi {publisherName}</h2>
          </div>

          <div className="publisher-books">{
            dataResponse.map((Genres) => (
              <div className="publisher-book" key={Genres.book_id}>
                <div className="publisher-book-name">
                  <Link href={`/books/${Genres.book_id}`}>{Genres.title}</Link>
                </div>
              </div>
            ))}
          </div>

        </div>

        <div className="nextOrPrev-publisher">
          <a href={`/publishers/${id - 1}`}>👈👈👈👈</a>
          <a href={`/publishers/${id - -1}`}>🤜🤜🤜🤜</a>
        </div>

        <FooterWithCredits rootClassName="footer-with-credits-root-class-name1"></FooterWithCredits>
      </div>
      <style jsx>
        {`
          .publishers-container {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background-color: #f5f5f5;
          }

          .publishers-name {
            font-size: 2rem;
            font-weight: 700;
            margin-bottom: 2rem;
            margin-top: 5rem;
          }
          
          .publisher-book-name {
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

          .nextOrPrev-publisher {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }

          .nextOrPrev-publisher a {
            margin: 0 1rem;
          }

          .nextOrPrev-publisher a:hover {
            color: #7fff00;
          }
        `}
      </style>
    </>
  )
}

export default Publishers
