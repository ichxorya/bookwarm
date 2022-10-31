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

const Publishers = (props) => {
  const title = randomTitle()

  // Get all publishers
  const [dataResponse, setDataResponse] = useState([]);
  useEffect(() => {
    async function getPageData() {
      const apiURLEndpoint =  `http://localhost:3000/api/publishers`;
      const response = await fetch(apiURLEndpoint);
      const res = await response.json();
      setDataResponse(res.Publishers);
    }
    getPageData();
  }, []);

  return (
    <>
      <div className="publishers-container">
        <Head>
          <title>{randomTitle()}</title>  
        </Head>
        <NavbarNotHome rootClassName="navbar-not-home-root-class-name5"></NavbarNotHome>

        <div className="publishers-list">{
          dataResponse.map((publishers) => {
            return (
              <div className="publisher" key={publishers.publisher_id}>
                <div className="publisher-name">
                  <Link href={`/publishers/${publishers.publisher_id}`}>
                    {publishers.publisher_name}
                  </Link>
                </div>
              </div>
            )
          }
        )}</div>

        <FooterWithCredits rootClassName="footer-with-credits-root-class-name"></FooterWithCredits>
      </div>
      <style jsx>
        {`
          .publishers-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-end;
          }

          .publishers-list {
            margin-top: 5rem;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 0 0 0 0;
          }

          .publisher-name {
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

export default Publishers
