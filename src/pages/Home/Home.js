import { Link } from "react-router-dom";
import styled from "styled-components";

import { Container } from "@styles/global";
import { Button } from "../../styles/global";

import Layout from "../../components/layout/Layout";
import Content from "./Content";

const Home = () => {
  return (
    <Layout>
      <Container>
        <Hero>
          <h1>
            An awesome collection of content for developers trying to bootstrap
            their SaaS business.
          </h1>
          <h2>
            Free & Open source from day one. If you'd like to receive updates,
            you can <Link to="/sub">subscribe</Link>.
          </h2>
          <a
            href="https://github.com/sponsors/nicolas-racchi"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <Button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              Sponsor Me on GitHub 😍
            </Button>
          </a>
        </Hero>
        <Introduction>
          <h2>Introduction</h2>
          <p>
            This document is a curation of useful resources & advice about the
            Software as a Service business, especially tailored for developers.
            Created by{" "}
            <a
              href="https://www.nicolasracchi.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Nicolas Racchi
            </a>
            . If you like this content, I suggest you to{" "}
            <Link to="/sub">subscribe</Link> to the email updates that I send
            whenever I add new content. It usually happens once a month.
          </p>
          <hr />
        </Introduction>
      </Container>
      <Container>
        <Content />
      </Container>
    </Layout>
  );
};

export default Home;

const Hero = styled.div`
  margin-bottom: 60px;

  h1 {
    font-size: 2.1rem;
    max-width: 850px;
  }
  h2 {
    max-width: 650px;
  }
`;

const Introduction = styled.div`
  margin-bottom: 60px;
  h2 {
    font-size: 2.4rem;
  }
  p {
    font-size: 1.5rem;
  }
  hr {
    border: 1px solid ${({ theme }) => theme.tertiary};
  }
`;
