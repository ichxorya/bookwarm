import React from 'react'
import Head from 'next/head'

import NavbarNotHome from '../components/navbar-not-home'
import FooterWithCredits from '../components/footer-with-credits'
import { imgLoader } from '../utils/imgLoader'
import Image from 'next/image';

const Authors = (props) => {
  return (
    <>
      <div className="authors-container">
        <Head>
          <title>Authors - Bookwarm</title>
          <meta property="og:title" content="Authors - Bookwarm" />
        </Head>
        <NavbarNotHome rootClassName="navbar-not-home-root-class-name5"></NavbarNotHome>
        <FooterWithCredits rootClassName="footer-with-credits-root-class-name"></FooterWithCredits>
      </div>
      <style jsx>
        {`
          .authors-container {
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

export default Authors
