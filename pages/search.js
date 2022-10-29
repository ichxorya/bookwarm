import React from 'react'
import Head from 'next/head'

import NavbarNotHome from '../components/navbar-not-home'
import FooterWithCredits from '../components/footer-with-credits'
import { imgLoader } from '../utils/imgLoader'
import Image from 'next/image';

const Search = (props) => {
  return (
    <>
      <div className="search-container">
        <Head>
          <title>Search - Bookwarm</title>
          <meta property="og:title" content="Search - Bookwarm" />
        </Head>
        <NavbarNotHome rootClassName="navbar-not-home-root-class-name6"></NavbarNotHome>
        <FooterWithCredits rootClassName="footer-with-credits-root-class-name6"></FooterWithCredits>
      </div>
      <style jsx>
        {`
          .search-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-end;
          }
        `}
      </style>
    </>
  )
}

export default Search
