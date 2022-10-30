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
import { handler } from '../api/books/[id]'

const Books = (props) => {
  const title = randomTitle()

  const router = useRouter()
  const {id} = router.query

  const [dataResponse, setDataResponse] = useState([]);
  useEffect(() => {
    async function getPageData() {
      const apiURLEndpoint =  `http://localhost:3000/api/books/${id}`;
      const response = await fetch(apiURLEndpoint);
      const res = await response.json();
      setDataResponse(res.Books);
    }
    getPageData();
  }, [id]);

  return (
    <>
      <div className="books-container">
        <NextSeo
          title={title}
        />
        <NavbarNotHome rootClassName="navbar-not-home-root-class-name1"></NavbarNotHome>

        <div className="books-content-container">{
        // If dataResponse is not an empty-array-as-string, then render the data
        JSON.stringify(dataResponse) !== '[]' ? (
          dataResponse.map((Books) => {
              
            const bookCoverSource = '/' + Books.cover_source;

            const bookPublicationDate = (Books.publication_date != null) ? 
            (
              (Books.publication_date).substring(8, 10) + '/' +
              (Books.publication_date).substring(5, 7) + '/' +
              (Books.publication_date).substring(0, 4)
            ) : '<cần bổ sung>';

          return (
          <div key={Books.book_id}>
              <div className="book-title">{Books.title}</div>
              <div className="books-content">
                <div className="column">
                  <Image
                    loader={imgLoader}
                    src={bookCoverSource}
                    alt=""
                    width={512}
                    height={512}
                  />
                </div>
                <div className="column">
                  <div className="book-author">
                    Tác giả: {false ? 'true' : '<cần bổ sung>'}
                  </div>
                  <div className="book-publisher">
                    Nhà xuất bản: {Books.publisher_id}
                  </div>
                  <div className="book-published-date">
                    Ngày xuất bản: {bookPublicationDate}
                  </div>
                  <div className="book-description">
                    Số trang: {Books.pages}
                  </div>
                </div>
              </div>
          </div>
          );
        })) : (
          <div className="book-title">Không tìm thấy sách</div>
        )}
        </div>

        <div className="nextOrPrev-book">
          <a href={`/books/${id - 1}`}>Prev Book</a>
          <a href={`/books/${id - -1}`}>Next Book</a>
        </div>

        <FooterWithCredits rootClassName="footer-with-credits-root-class-name1"></FooterWithCredits>
      </div>
      <style jsx>
        {`
          .books-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-end;
          }

          .book-title {
            font-size: 2rem;
            font-weight: 700;
            margin-bottom: 1rem;
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

          .nextOrPrev-book {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }

          .nextOrPrev-book a {
            margin: 0 1rem;
          }

          .nextOrPrev-book a:hover {
            color: #7fff00;
          }
        `}
      </style>
    </>
  )
}

export default Books
