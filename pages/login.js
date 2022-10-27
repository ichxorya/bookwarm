import React from 'react'
import Head from 'next/head'

import FooterWithCredits from '../components/footer-with-credits'
import NavbarNotHome from '../components/navbar-not-home'

const Login = (props) => {
  return (
    <>
      <div className="login-container">
        <Head>
          <title>Login - Bookwarm</title>
          <meta property="og:title" content="Login - Bookwarm" />
        </Head>
        <div className="login-container1">
          <div className="login-container2">
            <input
              type="text"
              required
              placeholder="tài khoản"
              className="login-textinput input"
            />
            <input
              type="password"
              required
              placeholder="mật khẩu"
              className="login-textinput1 input"
            />
            <button
              name="login_button"
              type="submit"
              className="login-button loginbutton button"
            >
              <span>
                <span>Đăng nhập</span>
                <br></br>
              </span>
            </button>
          </div>
        </div>
        <FooterWithCredits rootClassName="footer-with-credits-root-class-name5"></FooterWithCredits>
        <NavbarNotHome rootClassName="navbar-not-home-root-class-name"></NavbarNotHome>
      </div>
      <style jsx>
        {`
          .login-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-end;
          }
          .login-container1 {
            left: 0px;
            right: 0px;
            bottom: 99px;
            height: 825px;
            display: flex;
            position: absolute;
            align-self: flex-end;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: #00ca15;
          }
          .login-container2 {
            flex: 0 0 auto;
            width: 489px;
            height: 50%;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .login-textinput {
            margin: 11px;
            margin-top: 11px;
            text-align: left;
            margin-left: 11px;
            border-width: 3px;
            margin-right: 11px;
            margin-bottom: 11px;
          }
          .login-textinput1 {
            padding-top: 11px;
            border-width: 3px;
            padding-bottom: 11px;
          }
          .login-button {
            height: 51px;
            margin-top: 11px;
            border-radius: var(--dl-radius-radius-radius24);
            margin-bottom: 11px;
          }
        `}
      </style>
    </>
  )
}

export default Login
