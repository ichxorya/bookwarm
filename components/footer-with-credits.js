import React from 'react'

import PropTypes from 'prop-types'

const FooterWithCredits = (props) => {
  return (
    <>
      <div
        className={`footer-with-credits-footer-container ${props.rootClassName} `}
      >
        <div className="footer-with-credits-footer">
          <div className="footer-with-credits-social-links">
            <a
              href="https://github.com/ichxorya"
              target="_blank"
              rel="noreferrer noopener"
              className="footer-with-credits-link"
            >
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="footer-with-credits-icon"
              >
                <path d="M438.857 73.143c242.286 0 438.857 196.571 438.857 438.857 0 193.714-125.714 358.286-300 416.571-22.286 4-30.286-9.714-30.286-21.143 0-14.286 0.571-61.714 0.571-120.571 0-41.143-13.714-67.429-29.714-81.143 97.714-10.857 200.571-48 200.571-216.571 0-48-17.143-86.857-45.143-117.714 4.571-11.429 19.429-56-4.571-116.571-36.571-11.429-120.571 45.143-120.571 45.143-34.857-9.714-72.571-14.857-109.714-14.857s-74.857 5.143-109.714 14.857c0 0-84-56.571-120.571-45.143-24 60.571-9.143 105.143-4.571 116.571-28 30.857-45.143 69.714-45.143 117.714 0 168 102.286 205.714 200 216.571-12.571 11.429-24 30.857-28 58.857-25.143 11.429-89.143 30.857-127.429-36.571-24-41.714-67.429-45.143-67.429-45.143-42.857-0.571-2.857 26.857-2.857 26.857 28.571 13.143 48.571 64 48.571 64 25.714 78.286 148 52 148 52 0 36.571 0.571 70.857 0.571 81.714 0 11.429-8 25.143-30.286 21.143-174.286-58.286-300-222.857-300-416.571 0-242.286 196.571-438.857 438.857-438.857zM166.286 703.429c1.143-2.286-0.571-5.143-4-6.857-3.429-1.143-6.286-0.571-7.429 1.143-1.143 2.286 0.571 5.143 4 6.857 2.857 1.714 6.286 1.143 7.429-1.143zM184 722.857c2.286-1.714 1.714-5.714-1.143-9.143-2.857-2.857-6.857-4-9.143-1.714-2.286 1.714-1.714 5.714 1.143 9.143 2.857 2.857 6.857 4 9.143 1.714zM201.143 748.571c2.857-2.286 2.857-6.857 0-10.857-2.286-4-6.857-5.714-9.714-3.429-2.857 1.714-2.857 6.286 0 10.286s7.429 5.714 9.714 4zM225.143 772.571c2.286-2.286 1.143-7.429-2.286-10.857-4-4-9.143-4.571-11.429-1.714-2.857 2.286-1.714 7.429 2.286 10.857 4 4 9.143 4.571 11.429 1.714zM257.714 786.857c1.143-3.429-2.286-7.429-7.429-9.143-4.571-1.143-9.714 0.571-10.857 4s2.286 7.429 7.429 8.571c4.571 1.714 9.714 0 10.857-3.429zM293.714 789.714c0-4-4.571-6.857-9.714-6.286-5.143 0-9.143 2.857-9.143 6.286 0 4 4 6.857 9.714 6.286 5.143 0 9.143-2.857 9.143-6.286zM326.857 784c-0.571-3.429-5.143-5.714-10.286-5.143-5.143 1.143-8.571 4.571-8 8.571 0.571 3.429 5.143 5.714 10.286 4.571s8.571-4.571 8-8z"></path>
              </svg>
            </a>
          </div>
          <div className="footer-with-credits-copyright-container">
            <a
              href={props.link_link}
              target="_blank"
              rel="noreferrer noopener"
              className="footer-with-credits-link1"
            >
              <span className="anchor">
                MADE WITH
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="footer-with-credits-text1">TELEPORTHQ</span>
            </a>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .footer-with-credits-footer-container {
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-gray-white);
          }
          .footer-with-credits-footer {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxcontent);
            align-items: center;
            padding-top: var(--dl-space-space-tripleunit);
            padding-left: var(--dl-space-space-tripleunit);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-tripleunit);
            justify-content: space-between;
          }
          .footer-with-credits-social-links {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .footer-with-credits-link {
            display: contents;
          }
          .footer-with-credits-icon {
            width: 24px;
            height: 24px;
            text-decoration: none;
          }
          .footer-with-credits-copyright-container {
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .footer-with-credits-link1 {
            font-style: normal;
            font-family: Raleway;
            font-weight: 700;
            line-height: 1.55;
            text-transform: capitalize;
            text-decoration: none;
          }
          .footer-with-credits-text1 {
            color: #0018ff;
            font-size: 33px;
          }
        `}
      </style>
    </>
  )
}

FooterWithCredits.defaultProps = {
  link_link: 'https://teleporthq.io',
  rootClassName: '',
}

FooterWithCredits.propTypes = {
  link_link: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default FooterWithCredits
