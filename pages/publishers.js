import React from 'react'
import Head from 'next/head'

import NavbarNotHome from '../components/navbar-not-home'
import FooterWithCredits from '../components/footer-with-credits'
import { imgLoader } from '../utils/imgLoader'
import Image from 'next/image';

const Publishers = (props) => {
  return (
    <>
      <div className="publishers-container">
        <Head>
          <title>Publishers - Bookwarm</title>
          <meta property="og:title" content="Publishers - Bookwarm" />
        </Head>
        <NavbarNotHome rootClassName="navbar-not-home-root-class-name4"></NavbarNotHome>
        <FooterWithCredits rootClassName="footer-with-credits-root-class-name3"></FooterWithCredits>
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
        `}
      </style>
    </>
  )
}

export default Publishers
