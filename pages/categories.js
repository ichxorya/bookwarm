import React from 'react'
import Head from 'next/head'

import NavbarNotHome from '../components/navbar-not-home'
import FooterWithCredits from '../components/footer-with-credits'
import { imgLoader } from '../utils/imgLoader'
import Image from 'next/image';

const Categories = (props) => {
  return (
    <>
      <div className="categories-container">
        <Head>
          <title>Categories - Bookwarm</title>
          <meta property="og:title" content="Categories - Bookwarm" />
        </Head>
        <NavbarNotHome rootClassName="navbar-not-home-root-class-name2"></NavbarNotHome>
        <FooterWithCredits rootClassName="footer-with-credits-root-class-name2"></FooterWithCredits>
      </div>
      <style jsx>
        {`
          .categories-container {
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

export default Categories
