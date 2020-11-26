import styled from "styled-components";
import { Link } from "react-scroll";

import { TwitterLogo, FacebookLogo, EnvelopeSimple } from "phosphor-react";

const Toc = () => {
  return (
    <Sidebar>
      <div id="toc">
        <h3>Table of Contents</h3>
        <CLink to="💫 Core Knowledge">1. Core Knowledge</CLink>
        <CLink to="♼ What's the Building Process of Micro-SaaS?">
          2. The Building Process
        </CLink>
        <CLink to="❓ FAQ">3. FAQ</CLink>
        <CLink to="🖼 Landing Page">4. Landing Page</CLink>
        <CLink to="🛠 Tools used by bootstrapped founders">5. Tools</CLink>
        <CLink to="📈 Examples of successful Micro-SaaS companies and makers">
          6. Success Stories
        </CLink>
        <CLink to="📉 Failure stories">7. Failure stories</CLink>
        <CLink to="📕 Books">8. Books</CLink>
        <CLink to="🗞 Blogs & Communities">9. Blogs & Communities</CLink>
        <CLink to="🧱 Extra Material">10. Extra material</CLink>
      </div>
      <div id="social">
        <h3>Share 😜</h3>
        <div className="icons">
          <a href="/" target="_blank" rel="noopener noreferrer nofollow">
            <TwitterLogo size={38} />
          </a>
          <a href="/" target="_blank" rel="noopener noreferrer nofollow">
            <FacebookLogo size={38} />
          </a>
          <a href="/" target="_blank" rel="noopener noreferrer nofollow">
            <EnvelopeSimple size={38} />
          </a>
        </div>
      </div>
    </Sidebar>
  );
};

export default Toc;

const CLink = ({ to, children }) => (
  <Link to={to} spy smooth offset={-25} duration={400} activeClass="active">
    {children}
  </Link>
);

const Sidebar = styled.div`
  margin-top: 30px;
  position: sticky;
  position: -webkit-sticky;
  top: 150px;

  /* ActiveClass for Toc Links */
  .active {
    color: ${({ theme }) => theme.primary};
  }

  #toc {
    height: 390px;
    display: block;
    margin-right: 20px;
    padding: 15px;
    border: 3px solid ${({ theme }) => theme.primary};
    border-radius: 6px;
    border-bottom-left-radius: 12px;
    border-top-left-radius: 12px;
    border-left: 5px solid ${({ theme }) => theme.primary};
    box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.1);

    h3 {
      text-align: center;
      font-size: 1.25rem;
      margin-top: 5px;
      margin-bottom: 10px;
    }

    a {
      font-size: 1rem;
      display: block;
      line-height: 2.2rem;
      color: ${({ theme }) => theme.text};

      &:hover {
        cursor: pointer;
        color: ${({ theme }) => theme.primary};
      }
    }
  }

  #social {
    margin-top: 20px;
    height: 90px;
    display: block;
    margin-right: 20px;
    padding: 15px;
    border: 3px solid ${({ theme }) => theme.secondary};
    border-radius: 6px;
    border-bottom-left-radius: 12px;
    border-top-left-radius: 12px;
    border-left: 5px solid ${({ theme }) => theme.secondary};
    box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.1);

    h3 {
      text-align: center;
      font-size: 1.25rem;
      margin-top: 5px;
      margin-bottom: 10px;
    }

    .icons {
      display: flex;
      justify-content: center;
    }

    a {
      padding: 5px;
      color: ${({ theme }) => theme.text};
      &:hover {
        cursor: pointer;
        color: ${({ theme }) => theme.primary};
      }
    }
  }
`;
