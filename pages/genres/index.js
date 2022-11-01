import React from 'react'
import Head from 'next/head'
import { useEffect, useState } from 'react';

import Link from 'next/link'
import NavbarNotHome from '../../components/navbar-not-home'
import FooterWithCredits from '../../components/footer-with-credits'
import { imgLoader } from '../../utils/imgLoader'
import Image from 'next/image';
import { NextSeo } from 'next-seo';
import { randomTitle } from '../../utils/randomTitle'

const Genres = (props) => {

  // Get all genres
  const [dataResponse, setDataResponse] = useState([]);
  useEffect(() => {
    async function getPageData() {
      const apiURLEndpoint =  `http://localhost:3000/api/genres`;
      const response = await fetch(apiURLEndpoint);
      const res = await response.json();
      setDataResponse(res.Genres);
    }
    getPageData();
  }, []);
  return (
    <>
      <div className="genres-container">
        <Head>
          <title>{randomTitle()}</title>  
        </Head>
        <NavbarNotHome rootClassName="navbar-not-home-root-class-name2"></NavbarNotHome>

        <div className="genres-list">{
          dataResponse.map((Genres) => {
            return (
              <div className="genres" key={Genres.category_id}>
                <div className="genres-name">
                  <Link href={`/genres/${Genres.category_id}`}>
                    {Genres.category_name}
                  </Link>
                </div>
              </div>
            )
          }
        )}</div>

        <FooterWithCredits rootClassName="footer-with-credits-root-class-name2"></FooterWithCredits>
      </div>
      <style jsx>
        {`
          .genres-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-end;
          }

          .genres-list {
            margin-top: 5rem;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 0 0 0 0;
          }

          .genre-name {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

export default Genres