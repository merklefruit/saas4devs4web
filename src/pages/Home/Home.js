import { Link } from "react-router-dom";
import styled from "styled-components";

import { Container } from "@styles/global";
import { Button } from "../../styles/global";

import Layout from "../../components/layout/Layout";
import MDContent from "./Content";
import Toc from "./Toc";
import ScrollToTop from "./ScrollToTop";

const Home = () => {
  return (
    <Layout>
      <ScrollToTop />

      <Container>
        <Hero>
          <h1>
            An awesome collection of content for developers trying to bootstrap
            their SaaS business.
          </h1>
          <h2>
            Free &{" "}
            <a
              href="https://www.github.com/nicolas-racchi/SaaS4Devs"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open source
            </a>{" "}
            from day one. If you'd like to receive updates, you can{" "}
            <a
              href="https://buttondown.email/saas4devs"
              target="_blank"
              rel="noopener noreferrer"
            >
              subscribe
            </a>
            .
          </h2>
          <Link to="/support">
            <Button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              Support Me 😎
            </Button>
          </Link>
        </Hero>
        <Introduction id="core-knowledge">
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
            <a
              href="https://buttondown.email/saas4devs"
              target="_blank"
              rel="noopener noreferrer"
            >
              subscribe
            </a>{" "}
            to the email updates that I send whenever I add new content. It
            usually happens once a month.
          </p>
          <hr />
        </Introduction>
      </Container>

      <ContentSection>
        <Container id="desktop">
          <Grid>
            <Sidebar>
              <Toc />
            </Sidebar>
            <Content>
              <MDContent />
            </Content>
          </Grid>
        </Container>
        <Container id="mobile">
          <MDContent />
        </Container>
      </ContentSection>
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

const ContentSection = styled.section`
  #desktop {
    display: block;
    @media (max-width: 850px) {
      display: none;
    }
  }

  #mobile {
    overflow-x: hidden;
    display: none;
    @media (max-width: 850px) {
      display: block;
    }
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-areas: "sidebar content";
  grid-template-columns: 250px 1fr;
`;

const Sidebar = styled.div`
  grid-area: sidebar;
`;

const Content = styled.div`
  grid-area: content;
  width: 100%;
`;
