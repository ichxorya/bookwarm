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

const Books = (props) => {
  const router = useRouter()
  const {id} = router.query

  // Get book info
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
  const bookContent = JSON.stringify(dataResponse)

  // Get book authors
  const [authorResponse, setAuthorResponse] = useState([]);
  useEffect(() => {
    async function getPageData() {
      const apiURLEndpoint =  `http://localhost:3000/api/books/findBookAuthor?id=${id}`;
      const response = await fetch(apiURLEndpoint);
      const res = await response.json();
      setAuthorResponse(res.Books);
    }
    getPageData();
  }, [id]);
  const authorContent = JSON.stringify(authorResponse)

  // Get book genres
  const [genreResponse, setGenreResponse] = useState([]);
  useEffect(() => {
    async function getPageData() {
      const apiURLEndpoint =  `http://localhost:3000/api/books/findBookGenre?id=${id}`;
      const response = await fetch(apiURLEndpoint);
      const res = await response.json();
      setGenreResponse(res.Books);
    }
    getPageData();
  }, [id]);
  const genreContent = JSON.stringify(genreResponse)

  // Get book publisher
  const [publisherResponse, setPublisherResponse] = useState([]);
  useEffect(() => {
    async function getPageData() {
      const apiURLEndpoint =  `http://localhost:3000/api/books/findBookPublisher?id=${id}`;
      const response = await fetch(apiURLEndpoint);
      const res = await response.json();
      setPublisherResponse(res.Books);
    }
    getPageData();
  }, [id]);
  const publisherContent = JSON.stringify(publisherResponse)  
  
  // Get book reviews
  const [reviewResponse, setReviewResponse] = useState([]);
  useEffect(() => {
    async function getPageData() {
      const apiURLEndpoint =  `http://localhost:3000/api/books/findBookReview?id=${id}`;
      const response = await fetch(apiURLEndpoint);
      const res = await response.json();
      setReviewResponse(res.Books);
    }
    getPageData();
  }, [id]);
  const reviewContent = JSON.stringify(reviewResponse)
  
  // Get book average rating
  const [ratingResponse, setRatingResponse] = useState([]);
  useEffect(() => {
    async function getPageData() {
      const apiURLEndpoint =  `http://localhost:3000/api/books/findBookAvgRating?id=${id}`;
      const response = await fetch(apiURLEndpoint);
      const res = await response.json();
      setRatingResponse(res.Books);
    }
    getPageData();
  }, [id]);
  const ratingContent = JSON.stringify(ratingResponse)
  const _avgRating = (ratingContent.substring(16, ratingContent.length - 3))
  const avgRating = (_avgRating != "ul") ? _avgRating : "chưa có"

  return (
    <>
      <div className="books-container">
        <Head>
          <title>{randomTitle()}</title>  
        </Head>
        <NavbarNotHome rootClassName="navbar-not-home-root-class-name1"></NavbarNotHome>

        <div className="books-content-container">{
        // If dataResponse is not an empty-array-as-string, then render the data
        bookContent !== '[]' ? (
          dataResponse.map((Books) => {
              
            const bookCoverSource = '/' + Books.cover_source;

            const bookPublicationDate = (Books.publication_date != null) ? 
            (
              (Books.publication_date).substring(8, 10) + '/' +
              (Books.publication_date).substring(5, 7) + '/' +
              (Books.publication_date).substring(0, 4)
            ) : '~cần bổ sung~';

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
                    Tác giả:
                    {
                      authorContent !== '[]' ? (
                        authorResponse.map((Books) => {
                          return (
                            // Author names are separated by commas
                            <span key={Books.author_id}> 
                              <a href={`/authors/${Books.author_id}`}>{" " + Books.author_name + ", "}</a>
                            </span>
                          )
                        }
                      )) : (
                        <span> ~cần bổ sung~</span>
                    )}
                  </div>
                  <div className="book-publisher">
                    Nhà xuất bản:
                    {
                      publisherContent !== '[]' ? (
                        publisherResponse.map((Books) => {
                          return (
                            <span key={Books.publisher_id}> 
                              <a href={`/publishers/${Books.publisher_id}`}>{" " + Books.publisher_name + ", "}</a>
                            </span>
                          )
                        }
                      )) : (
                        <span> ~cần bổ sung~</span>
                    )}
                  </div>
                  <div className="book-category">
                    Thể loại:
                    {
                      genreContent !== '[]' ? (
                        genreResponse.map((Books) => {
                          return (
                            // Genre names are separated by commas
                            <span key={Books.category_id}> 
                              <a href={`/genres/${Books.category_id}`}>{" " + Books.category_name + ", "}</a>
                            </span>
                          )
                        }
                      )) : (
                        <span> ~cần bổ sung~</span>
                    )}
                  </div>
                  <div className="book-published-date">
                    Ngày xuất bản: {bookPublicationDate}
                  </div>
                  <div className="book-description">
                    Số trang: {Books.pages}
                  </div>
                  <div className="book-avg-rating">
                    Đánh giá trung bình: {avgRating}
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
          <a href={`/books/${id - 1}`}>👈👈👈👈</a>
          <a href={`/books/${id - -1}`}>🤜🤜🤜🤜</a>
        </div>

        <div className="book-reviews">
          <div className="book-review-title">Đánh giá</div>
          {
            reviewContent !== '[]' ? (
              reviewResponse.map((Books) => {
                return (
                  <div key={Books.review_id}>
                    <div className="book-review">
                      <div className="book-reviewer">
                        <a href={`/users/${Books.username}`}>{Books.username}</a>
                      </div>
                      <div className="book-review-rating">
                        {Books.rating} điểm
                      </div>
                      <div className="book-review-content">
                        {Books.comment}
                      </div>
                      <div className="book-review-separator">
                        <hr></hr>
                      </div>
                    </div>
                  </div>
                );
              }
            )) : (
              <div className="book-review">
                Không có đánh giá.
              </div>
            )
          }
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
            margin-bottom: 2rem;
            margin-top: 5rem;

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

          .book-reviews {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
            margin-top: 5rem;
          }
          
          .book-review-title {
            font-size: 2rem;
            font-weight: 700;
            margin-bottom: 2rem;
            align-self: center;
          }

          .book-review {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
            margin-top: 1rem;
          }

          .book-reviewer {
            font-size: 1.5rem;
            font-weight: 700;
            align-self: center;
          }

          .book-review-rating {
            font-size: 1.2rem;
            font-weight: 700;
            align-self: center;
          }

          .book-review-content {
            font-size: 1.2rem;
            font-weight: 400;
          }

          .book-review-separator {
            width: 100%;
            margin-top: 1rem;
          }

        `}
      </style>
    </>
  )
}

export default Books
