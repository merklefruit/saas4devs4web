import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";

// For likes
// import { motion } from "framer-motion";
// import { Heart } from "phosphor-react";

// Icons
import {
  TwitterLogo,
  FacebookLogo,
  LinkedinLogo,
  CaretDown,
} from "phosphor-react";

const Toc = () => {
  const [coreKnowledge, setCoreKnowledge] = useState(false);
  const [buildingProcess, setBuildingProcess] = useState(false);
  const [faq, setFaq] = useState(false);
  const [landingPage, setLandingPage] = useState(false);
  const [tools, setTools] = useState(false);

  return (
    <Sidebar>
      <div id="toc">
        <h3>Table of Contents</h3>
        <TOCItem
          text="Core Knowledge"
          state={coreKnowledge}
          setState={setCoreKnowledge}
        >
          <TOCSubItem to="What is SaaS? and Micro-SaaS?">
            What is SaaS?
          </TOCSubItem>
          <TOCSubItem to="Why SaaS?">Why SaaS?</TOCSubItem>
        </TOCItem>

        <TOCItem
          text="Building Process"
          state={buildingProcess}
          setState={setBuildingProcess}
        >
          <TOCSubItem to="💡 Get Ideas for your product">
            Get an Idea
          </TOCSubItem>
          <TOCSubItem to="✏️ Validate your Idea">Validate it</TOCSubItem>
          <TOCSubItem to="🛠 Build your MVP">Build the MVP</TOCSubItem>
          <TOCSubItem to="🚀 Pre-Launch & Launch">Launch</TOCSubItem>
          <TOCSubItem to="🌱 Grow organically">Grow</TOCSubItem>
          <TOCSubItem to="🌠 What's next?">Scale & Exit</TOCSubItem>
        </TOCItem>

        <TOCItem text="FAQ" state={faq} setState={setFaq}>
          <TOCSubItem to="What are the key metrics of SaaS?">
            Key Metrics
          </TOCSubItem>
          <TOCSubItem to="What's the Customer Lifecycle of SaaS?">
            Customer Lifecycle
          </TOCSubItem>
          <TOCSubItem to="What's the best pricing strategy?">
            Pricing Strategy
          </TOCSubItem>
          <TOCSubItem to="Where do I publish my MVP?">
            Publish your MVP
          </TOCSubItem>
        </TOCItem>

        <TOCItem
          text="Landing Page"
          state={landingPage}
          setState={setLandingPage}
        >
          <TOCSubItem to="Page Builders">Page Builders</TOCSubItem>
          <TOCSubItem to="Landing page Templates">Templates</TOCSubItem>
          <TOCSubItem to="Curated examples websites">
            Curated Examples
          </TOCSubItem>
          <TOCSubItem to="Explained examples with advice">Advice</TOCSubItem>
        </TOCItem>

        <TOCItem text="Tools" state={tools} setState={setTools}>
          <TOCSubItem to="Analytics and Tracking">Analytics</TOCSubItem>
          <TOCSubItem to="Feedback collection and Feature requests">
            Feedback collection
          </TOCSubItem>
          <TOCSubItem to="Recurring Payment Platforms">
            Payment platforms
          </TOCSubItem>
          <TOCSubItem to="Miscellaneous Tools & Services">
            Miscellaneous
          </TOCSubItem>
          <TOCSubItem to="Complete Full-stack Boilerplates">
            Full-stack boilerplates
          </TOCSubItem>
        </TOCItem>

        <div className="toc-item">
          <CaretDown size={18} className="closed" />
          <div className="always-closed">
            <Link
              to="📈 Examples of successful Micro-SaaS companies and makers"
              spy
              smooth
              offset={-25}
              duration={400}
              activeClass="active"
            >
              Success Stories
            </Link>
          </div>
        </div>

        <div className="toc-item">
          <CaretDown size={18} className="closed" />
          <div className="always-closed">
            <Link
              to="📉 Failure stories"
              spy
              smooth
              offset={-25}
              duration={400}
              activeClass="active"
            >
              Failure Stories
            </Link>
          </div>
        </div>

        <div className="toc-item">
          <CaretDown size={18} className="closed" />
          <div className="always-closed">
            <Link
              to="📕 Books"
              spy
              smooth
              offset={-25}
              duration={400}
              activeClass="active"
            >
              Books
            </Link>
          </div>
        </div>

        <div className="toc-item">
          <CaretDown size={18} className="closed" />
          <div className="always-closed">
            <Link
              to="🗞 Blogs & Communities"
              spy
              smooth
              offset={-25}
              duration={400}
              activeClass="active"
            >
              Blogs & Communities
            </Link>
          </div>
        </div>

        <div className="toc-item">
          <CaretDown size={18} className="closed" />
          <div className="always-closed">
            <Link
              to="🧱 Extra Material"
              spy
              smooth
              offset={-25}
              duration={400}
              activeClass="active"
            >
              Extra Material
            </Link>
          </div>
        </div>
      </div>

      <div id="social">
        <h3>Share 😜</h3>
        <div className="icons">
          <a
            href="https://twitter.com/intent/tweet?text=If%20you%27re%20interested%20in%20SaaS,%20you%20should%20read%20this%20curation%20of%20awesome%20resources%20for%20Solo%20Founders%20by%20@NicolasRacchi&url=https://saas4devs.tech"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <TwitterLogo size={38} />
          </a>
          <a
            href="https://www.facebook.com/sharer/sharer.php?u=https://saas4devs.tech"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <FacebookLogo size={38} />
          </a>
          <a
            href="https://www.linkedin.com/sharing/share-offsite/?url=https://saas4devs.tech"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <LinkedinLogo size={38} />
          </a>
        </div>
      </div>

      {/* Todo: add likes (requires a database)*/}
      {/* <div id="likes">
        <p>+204</p>
        <motion.button
          onClick={() => handleLike()}
          whileHover={{ scale: 1.1, rotate: 0 }}
          whileTap={{ scale: 0.9, rotate: -10 }}
        >
          <Heart size={50} />
        </motion.button>
      </div> */}
    </Sidebar>
  );
};

export default Toc;

const TOCItem = ({ text, state, setState, children }) => {
  const toggleMenu = () => {
    setState(!state);
  };

  return (
    <>
      <div className="toc-item" onClick={() => toggleMenu()}>
        <CaretDown size={18} className={state ? "open" : "closed"} />
        <p>{text}</p>
      </div>
      <div className="open-items">{state && children}</div>
    </>
  );
};

const TOCSubItem = ({ to, children }) => (
  <div className="toc-subitem">
    <CLink to={to}>{children}</CLink>
  </div>
);

const CLink = ({ to, children }) => (
  <div className="clink">
    <Link to={to} spy smooth offset={-25} duration={400} activeClass="active">
      {children}
    </Link>
  </div>
);

const Sidebar = styled.div`
  margin-top: 30px;
  position: sticky;
  position: -webkit-sticky;
  top: 70px;

  /* ActiveClass for Toc Links */
  .active {
    color: ${({ theme }) => theme.primary};
  }

  #toc {
    .toc-item {
      display: flex;
      align-items: center;
      margin: 0;

      p {
        font-weight: 600;
        margin: 0.5rem 0;
        cursor: pointer;
        &:hover {
          color: ${({ theme }) => theme.primary};
        }
      }

      .closed {
        transform: rotate(-90deg);
      }
      .open {
        transform: rotate(0deg);
      }

      svg {
        display: block;
        margin: 0 5px 0 0;
        padding: 0;
        transition: ease-in-out 0.15s;
      }

      .always-closed {
        a {
          font-weight: 600;
          margin: 0 0;
          cursor: pointer;
          &:hover {
            color: ${({ theme }) => theme.primary};
          }
        }
      }
    }

    .toc-subitem {
      margin-left: 25px;
    }

    .clink {
      a {
        font-size: 0.935rem;
        font-family: "Poppins";
        line-height: 200%;
      }
    }

    display: block;
    padding: 15px 10px;
    margin-right: 20px;
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

  #likes {
    margin-top: 20px;
    margin-right: 20px;
    display: flex;
    height: 40px;
    justify-content: center;
    align-items: center;

    padding: 15px;
    border: 3px solid ${({ theme }) => theme.secondary};
    border-radius: 6px;
    border-bottom-left-radius: 12px;
    border-top-left-radius: 12px;
    border-left: 5px solid ${({ theme }) => theme.secondary};
    box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.1);

    button {
      margin: 0;
      padding: 5px 0 0 0;
      background: none;
      border: none;
      &:hover {
        cursor: pointer;
      }
      &:focus {
        outline: none;
      }
    }

    svg {
      color: red;
      margin: 0;
      padding: 0;
    }

    p {
      font-family: "Poppins";
      font-size: 1.5rem;
      font-weight: 500;
      margin: 0 8px 0 0;
    }
  }
`;
