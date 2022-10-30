import React from 'react'
import Link from 'next/link'
import { imgLoader } from '../utils/imgLoader'  
import Image from 'next/image';

import PropTypes from 'prop-types'

const NavbarNotHome = (props) => {
  return (
    <>
      <div
        data-role="Header"
        className={`navbar-not-home-navbar-container ${props.rootClassName} `}
      >
        <div className="navbar-not-home-navbar">
          <div className="navbar-not-home-left-side">
          <Image
              loader={imgLoader}
              src="\assets\logos\bookwarm.png"
              alt="Bookwarm Mini Logo"
              width={48}
              height={48}
            />
            <div className="navbar-not-home-links-container">
              <Link href="/">
                <a className="navbar-not-home-link01 anchor">{props.Link}</a>
              </Link>
              <Link href="/books">
                <a className="navbar-not-home-link03">
                  <span>Sách</span>
                  <br></br>
                </a>
              </Link>
              <Link href="/authors">
                <a className="navbar-not-home-link05">{props.Link1}</a>
              </Link>
              <Link href="/publishers">
                <a className="navbar-not-home-link07">{props.Link2}</a>
              </Link>
              <Link href="/categories">
                <a className="navbar-not-home-link09">{props.Link3}</a>
              </Link>
            </div>
          </div>
          <div className="navbar-not-home-mid-side">
            <select className="navbar-not-home-select">
              <option value="books">Sách</option>
              <option value="publishers">NXB</option>
              <option value="authors">Tác giả</option>
              <option value="categories">Thể loại</option>
            </select>
            <input
              type="text"
              placeholder="thanh tìm kiếm"
              className="navbar-not-home-textinput input"
            />
            <button className="navbar-not-home-button button">
              {props.button}
            </button>
          </div>
          <Link href="/login">
            <a className="navbar-not-home-link10 button">
              <span>
                <span>Đăng nhập</span>
                <br></br>
              </span>
            </a>
          </Link>
          <div className="navbar-not-home-right-side"></div>
          <div data-type="MobileMenu" className="navbar-not-home-mobile-menu">
            <div className="navbar-not-home-container">
              <Image
                loader={imgLoader}
                src="\assets\logos\bookwarm.png"
                alt="Bookwarm Mini Logo"
                width={48}
                height={48}
              />
              <div
                data-type="CloseMobileMenu"
                className="navbar-not-home-close-menu"
              >
                <svg viewBox="0 0 1024 1024" className="navbar-not-home-icon2">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <div className="navbar-not-home-links-container1">
              <span className="navbar-not-home-link11 anchor">
                {props.Link4}
              </span>
              <a href="#inspiration" className="navbar-not-home-link12 anchor">
                {props.Link5}
              </a>
              <span className="navbar-not-home-link13 anchor">
                {props.Link6}
              </span>
              <span className="navbar-not-home-link14 anchor">
                {props.Link7}
              </span>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .navbar-not-home-navbar-container {
            width: 100%;
            display: flex;
            z-index: 100;
            position: relative;
            box-shadow: 5px 5px 10px 0px #b9b9b9;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-gray-white);
          }
          .navbar-not-home-navbar {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxcontent);
            align-items: center;
            padding-top: var(--dl-space-space-doubleunit);
            padding-left: var(--dl-space-space-tripleunit);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: row;
            padding-bottom: 12px;
            justify-content: space-between;
          }
          .navbar-not-home-left-side {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .navbar-not-home-image {
            width: 50px;
            align-self: center;
            object-fit: cover;
            margin-right: var(--dl-space-space-doubleunit);
          }
          .navbar-not-home-icon {
            width: 36px;
            height: 36px;
          }
          .navbar-not-home-links-container {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .navbar-not-home-link01 {
            margin-right: var(--dl-space-space-tripleunit);
            text-decoration: none;
          }
          .navbar-not-home-link03 {
            font-size: 18px;
            font-style: normal;
            font-family: Raleway;
            font-weight: 700;
            line-height: 1.55;
            margin-right: var(--dl-space-space-tripleunit);
            text-transform: capitalize;
            text-decoration: none;
          }
          .navbar-not-home-link05 {
            font-size: 18px;
            font-style: normal;
            font-family: Raleway;
            font-weight: 700;
            line-height: 1.55;
            margin-right: var(--dl-space-space-tripleunit);
            text-transform: capitalize;
            text-decoration: none;
          }
          .navbar-not-home-link07 {
            font-size: 18px;
            font-style: normal;
            font-family: Raleway;
            font-weight: 700;
            line-height: 1.55;
            margin-right: var(--dl-space-space-tripleunit);
            text-transform: capitalize;
            text-decoration: none;
          }
          .navbar-not-home-link09 {
            font-weight: bold;
            text-transform: capitalize;
            text-decoration: none;
          }
          .navbar-not-home-mid-side {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .navbar-not-home-select {
            width: 112px;
            height: 40px;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
          }
          .navbar-not-home-textinput {
            width: 161px;
            height: 40px;
            border-radius: 0px;
          }
          .navbar-not-home-button {
            width: 51px;
            height: 40px;
            padding: var(--dl-space-space-halfunit);
            align-self: center;
            text-align: center;
            transition: 0.3s;
            margin-left: 1px;
            border-radius: 0px;
            background-color: #ff00ee;
          }

          .navbar-not-home-link10 {
            color: var(--dl-color-gray-white);
            transition: 0.3s;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-fiveunits);
            border-radius: var(--dl-radius-radius-radius24);
            padding-right: var(--dl-space-space-fiveunits);
            padding-bottom: var(--dl-space-space-unit);
            text-decoration: none;
            background-color: var(--dl-color-gray-black);
          }

          .navbar-not-home-right-side {
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .navbar-not-home-mobile-menu {
            top: 0px;
            flex: 0 0 auto;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: none;
            padding: var(--dl-space-space-doubleunit);
            position: absolute;
            align-items: flex-start;
            flex-direction: column;
            background-color: #fff;
          }
          .navbar-not-home-container {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: row;
            justify-content: space-between;
          }
          .navbar-not-home-image1 {
            width: 50px;
            align-self: center;
            object-fit: cover;
            margin-right: var(--dl-space-space-doubleunit);
          }
          .navbar-not-home-close-menu {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .navbar-not-home-icon2 {
            width: 24px;
            height: 24px;
          }
          .navbar-not-home-links-container1 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .navbar-not-home-link11 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .navbar-not-home-link12 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .navbar-not-home-link13 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .navbar-not-home-link14 {
            text-decoration: none;
          }
          .navbar-not-home-root-class-name {
            top: 0px;
            left: 0px;
            position: absolute;
          }
          .navbar-not-home-root-class-name1 {
            top: 0px;
            left: 0px;
            position: absolute;
          }
          .navbar-not-home-root-class-name2 {
            top: 0px;
            left: 0px;
            position: absolute;
          }
          .navbar-not-home-root-class-name3 {
            top: 0px;
            left: 0px;
            position: absolute;
          }
          .navbar-not-home-root-class-name4 {
            top: 0px;
            left: 0px;
            position: absolute;
          }
          .navbar-not-home-root-class-name5 {
            top: 0px;
            left: 0px;
            right: 0px;
            margin: auto;
            position: absolute;
          }
          .navbar-not-home-root-class-name6 {
            top: 0px;
            left: 0px;
            position: absolute;
          }
          @media (max-width: 767px) {
            .navbar-not-home-icon {
              fill: var(--dl-color-gray-white);
            }
            .navbar-not-home-links-container {
              display: none;
            }
          }
          @media (max-width: 479px) {
            .navbar-not-home-link10 {
              font-size: 16px;
              padding-left: var(--dl-space-space-doubleunit);
              padding-right: var(--dl-space-space-doubleunit);
            }
          }
        `}
      </style>
    </>
  )
}

NavbarNotHome.defaultProps = {
  image_src: 'https://play.teleporthq.io/static/svg/default-img.svg',
  Link1: 'Tác giả',
  button: 'Tím',
  text: 'Đăng nhập',
  image_src2: 'https://play.teleporthq.io/static/svg/default-img.svg',
  image_src1: 'https://play.teleporthq.io/static/svg/default-img.svg',
  Link5: 'Inspiration',
  Link2: 'Nhà xuất bản',
  textinput_placeholder: 'placeholder',
  Link7: 'Our story',
  rootClassName: '',
  Link3: 'Thể loại sách',
  Link6: 'Process',
  Link: 'Trang chủ',
  image_alt: 'image',
  Link4: 'Resources',
  image_alt1: 'image',
}

NavbarNotHome.propTypes = {
  image_src: PropTypes.string,
  Link1: PropTypes.string,
  button: PropTypes.string,
  text: PropTypes.string,
  image_src2: PropTypes.string,
  image_src1: PropTypes.string,
  Link5: PropTypes.string,
  Link2: PropTypes.string,
  textinput_placeholder: PropTypes.string,
  Link7: PropTypes.string,
  rootClassName: PropTypes.string,
  Link3: PropTypes.string,
  Link6: PropTypes.string,
  Link: PropTypes.string,
  image_alt: PropTypes.string,
  Link4: PropTypes.string,
  image_alt1: PropTypes.string,
}

export default NavbarNotHome
