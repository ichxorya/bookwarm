import React from 'react'
import Head from 'next/head'

import NavbarNotHome from '../../components/navbar-not-home'
import FooterWithCredits from '../../components/footer-with-credits'
import { imgLoader } from '../../utils/imgLoader'
import Image from 'next/image';
import { NextSeo } from 'next-seo';
import { randomTitle } from '../../utils/randomTitle'

const Books = (props) => {
  const title = randomTitle()

  return (
    <>
      <div className="books-container">
        <NextSeo
          title={title}
          description="A collection of books I've read and enjoyed."
        />
        <NavbarNotHome rootClassName="navbar-not-home-root-class-name1"></NavbarNotHome>
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
