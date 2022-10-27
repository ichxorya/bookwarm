import React from 'react'
import Head from 'next/head'

import NavbarNotHome from '../components/navbar-not-home'
import FooterWithCredits from '../components/footer-with-credits'

const Newsfeed = (props) => {
  return (
    <>
      <div className="newsfeed-container">
        <Head>
          <title>Newsfeed - Bookwarm</title>
          <meta property="og:title" content="Newsfeed - Bookwarm" />
        </Head>
        <NavbarNotHome rootClassName="navbar-not-home-root-class-name3"></NavbarNotHome>
        <FooterWithCredits rootClassName="footer-with-credits-root-class-name4"></FooterWithCredits>
      </div>
      <style jsx>
        {`
          .newsfeed-container {
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

export default Newsfeed
