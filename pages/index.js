import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { NextSeo } from 'next-seo'
import Image from 'next/image'
import { imgLoader } from '../utils/imgLoader'

import FooterWithCredits from '../components/footer-with-credits'
import { randomTitle } from '../utils/randomTitle'

const Home = (props) => {

  return (
    <>
      <div className="home-container">
        <Head>
          <title>{randomTitle()}</title>  
        </Head>
        <div data-role="Header" className="home-navbar-container">
          <div className="home-navbar">
            <div className="home-left-side">
            <Image
              loader={imgLoader}
              src="\assets\logos\bookwarm.png"
              alt="Bookwarm Mini Logo"
              width={48}
              height={48}
            />
              <div className="home-links-container">
                <a href="#frontpage" className="home-link anchor">
                  Trang chủ
                </a>
                <a href="#features" className="home-link01 anchor">
                  Giới thiệu
                </a>
                <a href="#about" className="home-link02">
                  <span className="anchor">
                    Kẻ nào đứng sau trang ưeb này😤❗
                  </span>
                  <span>❓</span>
                </a>
              </div>
            </div>
            <div className="home-right-side">
              {/* <Link href="/login">
                <a className="home-link03 button">
                  <span>
                    <span>Đăng nhập</span>
                    <br></br>
                  </span>
                </a>
              </Link> */}
            </div>
            <div data-type="MobileMenu" className="home-mobile-menu">
              <div className="home-container1">
                <Image
                  loader={imgLoader}
                  src="https://play.teleporthq.io/static/svg/default-img.svg"
                  alt="defautl image"
                  layout="fill"
                />
                <div data-type="CloseMobileMenu" className="home-close-menu">
                  <svg viewBox="0 0 1024 1024" className="home-icon2">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <div className="home-links-container1">
                <span className="home-link04 anchor">Resources</span>
                <a href="#inspiration" className="home-link05 anchor">
                  Inspiration
                </a>
                <span className="home-link06 anchor">Process</span>
                <span className="home-link07 anchor">Our story</span>
              </div>
            </div>
          </div>
        </div>
        <div id="frontpage" className="home-frontpage">
          <Link href="/newsfeed">
            <a className="home-link08">
              <h1 className="home-heading">
                <span className="home-text05">🔥📚🔥</span>
                <span className="home-text06">🅱𝕠ⓞ🅺ⓦ🅐Ɽ🄼</span>
                <span className="home-text07">🔥📚🔥</span>
                <br className="section-Heading"></br>
              </h1>
            </a>
          </Link>
          <div className="home-content-container">
            <div className="home-hero-text">
              <span className="home-text09">
                <span className="home-text10">
                  🅱a tôi👨 nói👄, có 3️⃣ thứ quan trọng ❗ nhất 👍 trong cuộc
                  đời🧬 bạn🙏:
                </span>
                <br className="home-text11"></br>
                <br></br>
                <span className="home-text13">Ba👨🏽 của bạn là ai❔😤😤😤</span>
                <br className="home-text14"></br>
                <br></br>
                <span>
                         
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-text17">Bố👨🏻 của bạn là ai❓🥺🥺🥺</span>
                <br></br>
                <br></br>
                <span>
                                 
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-text21">
                  Và sách📚 của bạn❓❔❓❔🧠🧠🧠
                </span>
                <br></br>
                <br></br>
                <span className="home-text24">
                  Với tôi, sách vừa là 🅱ạn, vừa là 🅱ố*!
                </span>
                <br className="home-text25"></br>
                <br></br>
                <span>                               </span>
                <span className="home-text28">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-text29">Bố = Thầy😲😲😲</span>
              </span>
            </div>
          </div>
        </div>
        <div id="features" className="home-features">
          <div className="home-heading-container">
            <h2 className="home-text30 section-Heading">
              Ở đây có cái gì hay mà phải vào😤❓
            </h2>
          </div>
          <div className="home-cards-container">
            <div className="home-features-card">
              <div className="home-icon-container">
                <span>🤰🏽</span>
              </div>
              <div className="home-text-container">
                <span className="home-heading1 card-Heading">Bạn vjp </span>
                <span className="home-text32 card-Text">
                  Bạn vào đây là bạn vjp, bạn là nhất. Bạn vào đây rồi thì tôi
                  thách bạn tìm được đường ra luôn!!!
                </span>
              </div>
            </div>
            <div className="home-features-card1">
              <div className="home-icon-container1">
                <span>🔥</span>
              </div>
              <div className="home-text-container1">
                <span className="home-heading2 card-Heading">
                  Chúng tôi pro
                </span>
                <span className="home-text34">
                  Bạn đã vjp thì chúng tôi cũng pro. Nói thế cho nó dễ hiểu bạn
                  nhé. Nói chung là chúng tôi uy tín 101% luôn!!!
                </span>
              </div>
            </div>
            <div className="home-features-card2">
              <div className="home-icon-container2">
                <span>👨🏿</span>
              </div>
              <div className="home-text-container2">
                <span className="home-heading3 card-Heading">
                  Chúng ta là gigachad
                </span>
                <Image
                  loader={imgLoader}
                  src="assets/backgrounds/canyoufeelmyheart.jpg"
                  alt="canyoufeelmyheart"
                  width={222}
                  height={125}
                />
              </div>
            </div>
            <div className="home-features-card3">
              <div className="home-icon-container3">
                <span>😭</span>
              </div>
              <div className="home-text-container3">
                <span className="home-heading4">
                  B4n c0 d0c h3t nkunq qj t0j quj q4m b4nq c4 tr4j tjm v4 trj
                  tu3 n4y k0 z...?
                </span>
                <span className="home-text37">
                  Bạn&apos;s mà&apos;s không&apos;s đọc&apos;s hết&apos;s
                  thì&apos;s cũng&apos;s không&apos;s sao&apos;s cả&apos;s.
                  Tôi&apos;s đã&apos;s quen&apos;s với&apos;s việc&apos;s
                  viết&apos;s dài&apos;s và&apos;s không&apos;s ai&apos;s
                  đọc&apos;s rồi&apos;s...
                </span>
              </div>
            </div>
            <div className="home-features-card4">
              <div className="home-icon-container4">
                <span>💢</span>
              </div>
              <div className="home-text-container4">
                <span className="home-heading5 card-Heading">
                  Phần tính năng thực sự
                </span>
                <span className="home-text39">
                  <span className="card-Text">
                    👇🏿👇🏿👇🏿👇🏿👇🏿👇🏿👇🏿👇🏿👇🏿👇🏿👇🏿👇🏿👇🏿👇🏿👇🏿👇🏿👇🏿
                  </span>
                  <br></br>
                  <span>👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇</span>
                  <br></br>
                  <span>👇🏻👇🏻👇🏻👇🏻👇🏻👇🏻👇🏻👇🏻👇🏻👇🏻👇🏻👇🏻👇🏻👇🏻👇🏻</span>
                  <br></br>
                  <span>👇🏽👇🏽👇🏽👇🏽👇🏽👇🏽👇🏽👇🏽👇🏽👇🏽👇🏽👇🏽👇🏽👇🏽👇🏽</span>
                  <br></br>
                </span>
              </div>
            </div>
            <div className="home-features-card5">
              <div className="home-icon-container5">
                <span>👌</span>
              </div>
              <div className="home-text-container5">
                <span className="home-heading6 card-Heading">Lorem Ipsum</span>
                <span className="home-text49 card-Text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer nec odio. Praesent libero. Sed cursus ante dapibus
                  diam.c Sed nisi. Nulla quis sem at nibh elementum imperdiet.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div id="truefeatures" className="home-true-features">
          <div className="home-heading-container1">
            <h1 className="home-text50 section-Heading">
              Ở ĐÂY CHÚNG TÔI CÓ...
            </h1>
          </div>
          <div className="home-cards-container1">
            <div className="home-service-card">
              <h3 className="home-text51 card-Heading">Tri thức cho bản thân</h3>
              <span className="home-text52">
                <span className="card-Text">
                  Hàng nghìn cuốn sách và những người đứng sau chúng đang chờ
                  bạn khám phá!
                </span>
                <br></br>
              </span>
              <Link href="/books">
                <a className="home-link10">
                  <span>Cho tôi xem phát nào?</span>
                  <br></br>
                </a>
              </Link>
            </div>
            <div className="home-service-card1">
              <h3 className="home-text57 card-Heading">Cống hiến vì cộng đồng</h3>
              <span className="home-text58">
                <span>
                  Thế nhưng không phải cuốn sách nào cũng vẹn tròn thông tin...
                </span>
                <br></br>
              </span>
              <Link href="/books/todo">
                <a className="home-link12">
                  <span>Đừng lo, để tôi góp ý cho!</span>
                  <br></br>
                </a>
              </Link>
            </div>
            <div className="home-service-card2">
              <h3 className="home-text63">Ứng dụng hệ thống gợi ý</h3>
              <span className="home-text64">
                <span className="card-Text">
                  Chúng tôi hi vọng sẽ cung cấp tính năng này vào kiếp sau! Xin
                  hãy chờ đợi!
                </span>
                <br></br>
              </span>
              <a
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link13"
              >
                <span>Chán thế, chưa có à...</span>
                <br></br>
              </a>
            </div>
          </div>
        </div>
        <div id="about" className="home-section-separator"></div>
        <h1 className="home-text69 section-Heading">
          KẺ NÀO ĐỨNG SAU TRANG ƯEB NÀY 😤❗❓
        </h1>
        <div className="home-about">
          <div className="home-container2">
            <div className="home-container3">
              <h1 className="home-about-heading">
                <span className="home-text70">
                  Chính
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-text71">
                  là
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-text72">tôi!</span>
                <br className="home-text73"></br>
                <span className="home-text74">
                  Kẻ đứng sau tất cả😤😤💢💢💢
                </span>
                <br></br>
              </h1>
            </div>
            <img 
              src="assets\logos\bookwarm.png" 
              alt="🐱💿"
              height="333"
              width="333"
              className="logo-spinning"
            />
            
            <div>
              <audio autoPlay loop>
                <source src="assets/sounds/Ching Cheng Hanji - Peng Lexer Remix.mp3" type="audio/mp3" />
              </audio>
            </div>

          </div>
          <h1 className="home-about-heading1">
            <span className="home-text76">MIERU;PROJECTS - ICHXORYA 2022</span>
            <br className="home-text77"></br>
            <br></br>
            <span className="home-text79">BORN TO CODE</span>
            <br className="home-text80"></br>
            <br></br>
            <span className="home-text82">WORLD IS MINE (ℋḁ†ṧṷη∊ ♏유кṳ)</span>
            <br className="home-text83"></br>
            <br></br>
            <span className="home-text85">Tôi là Tùng 25 tuổi</span>
            <br className="home-text86"></br>
            <br></br>
            <span className="home-text88">
              Đang bị 1,9024,70518,3012 chú việt dũng techcombank hàng đậu đầu
              trọc săn đuổi
            </span>
            <br></br>
          </h1>
        </div>
        <div className="home-section-separator1"></div>
        <FooterWithCredits></FooterWithCredits>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            height: auto;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .home-navbar-container {
            top: 0;
            width: 100%;
            display: flex;
            z-index: 100;
            position: sticky;
            box-shadow: 5px 5px 10px 0px #b9b9b9;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-gray-white);
          }
          .home-navbar {
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
          .home-left-side {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-image {
            width: 50px;
            align-self: center;
            object-fit: cover;
            margin-right: var(--dl-space-space-doubleunit);
          }
          .home-icon {
            width: 36px;
            height: 36px;
          }
          .home-links-container {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-link {
            margin-right: var(--dl-space-space-tripleunit);
            text-decoration: none;
          }
          .home-link01 {
            margin-right: var(--dl-space-space-tripleunit);
            text-decoration: none;
          }
          .home-link02 {
            text-decoration: none;
          }
          .home-right-side {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-link03 {
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

          .home-mobile-menu {
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
          .home-container1 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: row;
            justify-content: space-between;
          }
          .home-image1 {
            width: 50px;
            align-self: center;
            object-fit: cover;
            margin-right: var(--dl-space-space-doubleunit);
          }
          .home-close-menu {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-icon2 {
            width: 24px;
            height: 24px;
          }
          .home-links-container1 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-link04 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .home-link05 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .home-link06 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .home-link07 {
            text-decoration: none;
          }
          .home-frontpage {
            width: 100%;
            height: 977px;
            display: flex;
            align-items: center;
            padding-top: 87px;
            margin-bottom: var(--dl-space-space-fiveunits);
            flex-direction: column;
            background-size: cover;
            justify-content: center;
            background-image: url('https://play.teleporthq.io/static/svg/default-img.svg');
            background-repeat: no-repeat;
            background-position: center;
          }
          .home-link08 {
            display: contents;
          }
          .home-heading {
            width: 1080px;
            font-size: 44px;
            text-align: center;
            text-decoration: none;
            background-color: rgb(236, 133, 255);
          }
          .home-text05 {
            font-size: 33px;
          }
          .home-text06 {
            font-size: 89px;
          }
          .home-text07 {
            font-size: 33px;
          }
          .home-content-container {
            width: 100%;
            height: 714px;
            display: flex;
            max-width: var(--dl-size-size-maxcontent);
            align-items: center;
            padding-top: 19px;
            padding-left: var(--dl-space-space-tripleunit);
            margin-bottom: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-tenunits);
            justify-content: center;
          }
          .home-hero-text {
            width: 1088px;
            height: 860px;
            display: flex;
            align-items: center;
            flex-direction: column;
            background-size: cover;
            justify-content: center;
            background-image: url('https://upload.wikimedia.org/wikipedia/commons/d/d4/The_House_of_Leaves_-_Burning_4.jpg');
          }
          .home-text09 {
            color: rgb(255, 255, 255);
            font-size: 30px;
            text-align: center;
            border-color: var(--dl-color-gray-black);
            border-width: 0px;
            margin-bottom: var(--dl-space-space-fiveunits);
          }
          .home-text10 {
            background-image: linear-gradient(
              0deg,
              rgb(189, 195, 199) 0%,
              rgb(0, 128, 255) 100%
            );
          }
          .home-text11 {
            background-image: linear-gradient(
              0deg,
              rgb(189, 195, 199) 0%,
              rgb(0, 128, 255) 100%
            );
          }
          .home-text13 {
            background-image: linear-gradient(
              90deg,
              rgb(189, 195, 199) 0%,
              rgb(73, 255, 0) 100%
            );
          }
          .home-text14 {
            background-image: linear-gradient(
              90deg,
              rgb(189, 195, 199) 0%,
              rgb(73, 255, 0) 100%
            );
          }
          .home-text17 {
            background-image: linear-gradient(
              270deg,
              rgb(189, 195, 199) 0%,
              rgb(205, 0, 255) 100%
            );
          }
          .home-text21 {
            background-image: linear-gradient(
              rgb(189, 195, 199) 0%,
              rgb(255, 0, 19) 100%
            );
          }
          .home-text24 {
            font-size: 44px;
            background-color: rgb(0, 0, 0);
          }
          .home-text25 {
            font-size: 44px;
            background-color: rgb(0, 0, 0);
          }
          .home-text28 {
            font-size: 22px;
          }
          .home-text29 {
            font-size: 22px;
          }
          .home-features {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxcontent);
            align-items: center;
            padding-top: var(--dl-space-space-tenunits);
            padding-left: var(--dl-space-space-tripleunit);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
          }
          .home-heading-container {
            width: 45%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-fiveunits);
            flex-direction: column;
            justify-content: center;
          }
          .home-text30 {
            text-align: center;
          }
          .home-cards-container {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-features-card {
            width: 30%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-doubleunit);
            padding-left: var(--dl-space-space-doubleunit);
            margin-bottom: var(--dl-space-space-fourunits);
            padding-right: var(--dl-space-space-doubleunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-doubleunit);
          }
          .home-icon-container {
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: center;
            margin-right: var(--dl-space-space-tripleunit);
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            padding-bottom: 8px;
            background-color: var(--dl-color-gray-900);
          }
          .home-text-container {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-heading1 {
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .home-text32 {
            color: var(--dl-color-gray-700);
            text-align: left;
          }
          .home-features-card1 {
            width: 30%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-doubleunit);
            padding-left: var(--dl-space-space-doubleunit);
            margin-bottom: var(--dl-space-space-fourunits);
            padding-right: var(--dl-space-space-doubleunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-doubleunit);
          }
          .home-icon-container1 {
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: center;
            margin-right: var(--dl-space-space-tripleunit);
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .home-text-container1 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-heading2 {
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .home-text34 {
            color: var(--dl-color-gray-700);
            text-align: left;
          }
          .home-features-card2 {
            width: 30%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-doubleunit);
            padding-left: var(--dl-space-space-doubleunit);
            margin-bottom: var(--dl-space-space-fourunits);
            padding-right: var(--dl-space-space-doubleunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-doubleunit);
          }
          .home-icon-container2 {
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: center;
            margin-right: var(--dl-space-space-tripleunit);
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .home-text-container2 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-heading3 {
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .home-image2 {
            width: 237px;
            height: 111px;
            object-fit: cover;
          }
          .home-features-card3 {
            width: 30%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-doubleunit);
            padding-left: var(--dl-space-space-doubleunit);
            padding-right: var(--dl-space-space-doubleunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-doubleunit);
          }
          .home-icon-container3 {
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: center;
            margin-right: var(--dl-space-space-tripleunit);
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .home-text-container3 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-heading4 {
            font-size: 24px;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .home-text37 {
            color: var(--dl-color-gray-700);
            text-align: left;
          }
          .home-features-card4 {
            width: 30%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-doubleunit);
            padding-left: var(--dl-space-space-doubleunit);
            padding-right: var(--dl-space-space-doubleunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-doubleunit);
          }
          .home-icon-container4 {
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: center;
            margin-right: var(--dl-space-space-tripleunit);
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .home-text-container4 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-heading5 {
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .home-text39 {
            color: var(--dl-color-gray-700);
            text-align: left;
          }
          .home-features-card5 {
            width: 30%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-doubleunit);
            padding-left: var(--dl-space-space-doubleunit);
            padding-right: var(--dl-space-space-doubleunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-doubleunit);
          }
          .home-icon-container5 {
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: center;
            margin-right: var(--dl-space-space-tripleunit);
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .home-text-container5 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-heading6 {
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .home-text49 {
            color: var(--dl-color-gray-700);
            text-align: left;
          }
          .home-true-features {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxcontent);
            margin-top: var(--dl-space-space-fiveunits);
            align-items: center;
            padding-top: var(--dl-space-space-tenunits);
            padding-left: var(--dl-space-space-tripleunit);
            margin-bottom: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
          }
          .home-heading-container1 {
            width: 45%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-fiveunits);
            flex-direction: column;
          }
          .home-text50 {
            width: 814px;
            text-align: center;
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .home-cards-container1 {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxcontent);
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-service-card {
            width: 30%;
            height: 260px;
            display: flex;
            padding: var(--dl-space-space-fourunits);
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-radius4);
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-gray-900);
          }
          .home-text51 {
            align-self: center;
            text-align: center;
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .home-text52 {
            color: rgb(255, 0, 5);
            text-align: left;
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .home-link10 {
            align-self: center;
            font-weight: bold;
            text-decoration: none;
          }
          .home-service-card1 {
            width: 30%;
            height: 259px;
            display: flex;
            padding: var(--dl-space-space-fourunits);
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-radius4);
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-gray-900);
          }
          .home-text57 {
            align-self: center;
            text-align: center;
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .home-text58 {
            color: rgb(255, 0, 5);
            text-align: left;
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .home-link12 {
            align-self: center;
            font-weight: bold;
            text-decoration: none;
          }
          .home-service-card2 {
            width: 30%;
            height: 257px;
            display: flex;
            padding: var(--dl-space-space-fourunits);
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-radius4);
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-gray-900);
          }
          .home-text63 {
            align-self: center;
            text-align: center;
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .home-text64 {
            color: rgb(255, 0, 5);
            text-align: left;
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .home-link13 {
            align-self: center;
            font-weight: bold;
            text-decoration: none;
          }
          .home-section-separator {
            width: 100%;
            height: 1px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .home-text69 {
            width: 934px;
            text-align: center;
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .home-about {
            width: 100%;
            display: flex;
            position: relative;
            max-width: var(--dl-size-size-maxcontent);
            margin-top: var(--dl-space-space-fiveunits);
            align-items: flex-start;
            padding-top: var(--dl-space-space-fiveunits);
            padding-left: var(--dl-space-space-tripleunit);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-fiveunits);
            justify-content: center;
          }
          .home-container2 {
            flex: 0 0 auto;
            width: auto;
            height: 588px;
            display: flex;
            align-self: flex-start;
            align-items: center;
            flex-direction: column;
          }
          .home-container3 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-about-heading {
            height: 163px;
          }
          .home-text70 {
            font-style: italic;
          }
          .home-text71 {
            font-style: italic;
          }
          .home-text72 {
            color: #ff0000;
            font-style: italic;
          }
          .home-text73 {
            font-style: italic;
          }
          .home-text74 {
            font-style: italic;
          }
          .home-image3 {
            width: auto;
            height: 390px;
            align-self: center;
            object-fit: cover;
          }
          .home-about-heading1 {
            height: 585px;
            align-self: center;
            text-align: center;
          }
          .home-text76 {
            color: #ffff00;
            background-color: rgb(255, 0, 0);
          }
          .home-text77 {
            color: #ffff00;
            background-color: rgb(255, 0, 0);
          }
          .home-text79 {
            background-color: rgb(0, 255, 203);
          }
          .home-text80 {
            background-color: rgb(0, 255, 203);
          }
          .home-text82 {
            background-color: rgb(0, 255, 98);
          }
          .home-text83 {
            background-color: rgb(0, 255, 98);
          }
          .home-text85 {
            color: var(--dl-color-gray-black);
            background-color: rgb(0, 108, 255);
          }
          .home-text86 {
            color: var(--dl-color-gray-black);
            background-color: rgb(0, 108, 255);
          }
          .home-text88 {
            background-color: rgb(255, 255, 0);
          }
          .home-section-separator1 {
            width: 100%;
            height: 1px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          @media (max-width: 991px) {
            .home-frontpage {
              flex-direction: column-reverse;
            }
            .home-content-container {
              flex-direction: column-reverse;
            }
            .home-hero-text {
              width: 80%;
            }
          }
          @media (max-width: 767px) {
            .home-icon {
              fill: var(--dl-color-gray-white);
            }
            .home-links-container {
              display: none;
            }
            .home-heading-container {
              width: 100%;
            }
            .home-cards-container {
              align-items: center;
              flex-direction: column;
            }
            .home-features-card {
              width: 70%;
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .home-features-card1 {
              width: 70%;
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .home-features-card2 {
              width: 70%;
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .home-features-card3 {
              width: 70%;
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .home-features-card4 {
              width: 70%;
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .home-features-card5 {
              width: 70%;
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .home-heading-container1 {
              width: 100%;
            }
            .home-cards-container1 {
              flex-wrap: wrap;
              align-items: flex-start;
              justify-content: center;
            }
            .home-service-card {
              width: 65%;
              margin-bottom: var(--dl-space-space-fourunits);
            }
            .home-service-card1 {
              width: 65%;
              margin-bottom: var(--dl-space-space-fourunits);
            }
            .home-service-card2 {
              width: 65%;
            }
          }
          @media (max-width: 479px) {
            .home-link03 {
              font-size: 16px;
              padding-left: var(--dl-space-space-doubleunit);
              padding-right: var(--dl-space-space-doubleunit);
            }
            .home-frontpage {
              padding-top: var(--dl-space-space-fourunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .home-content-container {
              padding-top: var(--dl-space-space-fiveunits);
              padding-bottom: var(--dl-space-space-fiveunits);
            }
            .home-hero-text {
              width: 100%;
            }
            .home-features {
              padding-top: var(--dl-space-space-fiveunits);
              padding-bottom: var(--dl-space-space-fiveunits);
            }
            .home-features-card {
              width: 100%;
            }
            .home-features-card1 {
              width: 100%;
            }
            .home-features-card2 {
              width: 100%;
            }
            .home-features-card3 {
              width: 100%;
            }
            .home-features-card4 {
              width: 100%;
            }
            .home-features-card5 {
              width: 100%;
            }
            .home-true-features {
              padding-top: var(--dl-space-space-fiveunits);
              padding-bottom: var(--dl-space-space-fiveunits);
            }
            .home-service-card {
              width: 100%;
            }
            .home-service-card1 {
              width: 100%;
            }
            .home-service-card2 {
              width: 100%;
            }
          }
          .logo-spinning {
            animation: logo-spin infinite 4s linear;
          }
          @keyframes logo-spin {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
