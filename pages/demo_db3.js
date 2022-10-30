import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import NavbarNotHome from '../components/navbar-not-home'
import FooterWithCredits from '../components/footer-with-credits'
import { imgLoader } from '../utils/imgLoader'
import Image from 'next/image';
import { NextSeo } from 'next-seo';
import { randomTitle } from '../utils/randomTitle'

const Books = (props) => {
  const title = randomTitle()

  const router = useRouter()

  const [dataResponse, setDataResponse] = useState([]);
  useEffect(() => {
    async function getPageData() {
      const apiURLEndpoint =  `http://localhost:3000/api/db3`;
      const response = await fetch(apiURLEndpoint);
      const res = await response.json();
      setDataResponse(res.Books);
    }
    getPageData();
  }, []);

  return (
    <>
      <div className="books-container">
        <NextSeo
          title={title}
        />
        <NavbarNotHome rootClassName="navbar-not-home-root-class-name1"></NavbarNotHome>

        <div className="books-content-container">{
            dataResponse.map((Books) => {
            return (
            <div key={Books.book_id}>
                <div>{Books.title}</div>
                <div>
                <img src={Books.cover_source} alt="" />
                </div>
            </div>
            );
        })}
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
        `}
      </style>
    </>
  )
}

export default Books
